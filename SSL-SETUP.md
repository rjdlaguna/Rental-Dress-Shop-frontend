# SSL Configuration Guide

## For Apache Server
1. Place certificate files in `/etc/ssl/certs/`
2. Configure virtual host:

```apache
<VirtualHost *:443>
    ServerName joytienzosdressshop.com
    DocumentRoot /var/www/html
    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/certificate.crt
    SSLCertificateKeyFile /etc/ssl/certs/private.key
    SSLCertificateChainFile /etc/ssl/certs/ca_bundle.crt
</VirtualHost>
```

## For Nginx Server
1. Place certificate files in `/etc/ssl/certs/`
2. Configure server block:

```nginx
server {
    listen 443 ssl;
    server_name joytienzosdressshop.com;
    
    ssl_certificate /etc/ssl/certs/certificate.crt;
    ssl_certificate_key /etc/ssl/certs/private.key;
    ssl_certificate_chain /etc/ssl/certs/ca_bundle.crt;
    
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }
}
```

## For Node.js/Vite Development
Use `https` module in development:

```javascript
import fs from 'fs';
import https from 'https';
import { ViteDevServer } from 'vite';

const server = https.createServer({
  key: fs.readFileSync('/path/to/private.key'),
  cert: fs.readFileSync('/path/to/certificate.crt')
}, app);
```

## Automatic HTTPS Redirect
Add this to force HTTPS:

```apache
# Apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

```nginx
# Nginx
server {
    listen 80;
    server_name joytienzosdressshop.com;
    return 301 https://$server_name$request_uri;
}
```

## Certificate Renewal
Free certificates expire every 90 days. Set up auto-renewal:

```bash
# For Let's Encrypt
0 12 * * * /usr/bin/certbot renew --quiet
```

## Testing SSL
Use these tools to verify your SSL setup:
- SSL Labs Test: https://www.ssllabs.com/ssltest/
- Why No Padlock: https://www.whynopadlock.com/
