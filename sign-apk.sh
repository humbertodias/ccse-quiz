#!/bin/sh

# credenciais
STORE_ALIAS=android
STORE_PASS=password

KEY_STORE=android.keystore
KEY_PASS=$STORE_PASS

APK_UNSIGNED=android/app/build/outputs/apk/release/app-release-unsigned.apk
APK_SIGNED=android/app/build/outputs/apk/reelase/app-release-signed.apk
DNAME="CN=Polygon, OU=Application Development, O=br.polygon4games.ccse, L=Barcelona, S=Barcelona, C=ES"
# gerar senao existir anterior
if [ ! -f $KEY_STORE ]; then

# gerar chave
keytool -v \
-genkey \
-keystore $KEY_STORE \
-alias $STORE_ALIAS \
-keyalg RSA \
-keysize 2048 \
-validity 10000 \
-dname "$DNAME"<<EOF
$STORE_PASS
$STORE_PASS
$STORE_PASS
$STORE_PASS
EOF

fi

# assinando apk
jarsigner -verbose \
-certs \
-keystore $KEY_STORE \
-storepass $STORE_PASS \
-keypass $KEY_PASS \
$APK_UNSIGNED \
$STORE_ALIAS

# verificando assinatura no jar
jarsigner -verify \
-verbose \
-certs \
$APK_UNSIGNED

rm $APK_SIGNED

zipalign -v 4 \
$APK_UNSIGNED \
$APK_SIGNED

echo "SIGNED FILE: $APK_SIGNED"

# Hash com a assinatura
keytool -printcert -jarfile "$APK_SIGNED"