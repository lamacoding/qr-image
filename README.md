# QR Code Generator API

This is a simple Node.js API that generates QR codes from text provided in the URL path.

## Prerequisites

* **Node.js:** Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
* **SSL Certificates (for HTTPS):**
    * If you want to run the server over HTTPS, you'll need SSL certificate files (a private key and a certificate).

## Installation

1.  **Clone the repository (or copy the code):**

2.  **Install dependencies:**
    * Open a terminal in the project directory and run:
        ```bash
        npm install
        ```

3.  **Set up SSL certificates (if using HTTPS):**
    * If you have SSL certificates, place the key file (e.g., `key.pem`) and the certificate file (e.g., `cert.pem`) in your project directory (or a location of your choice).
    * If you are using self-signed certificates and have openssl installed, you can generate them using a command similar to this:
        ```bash
        openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem
        ```
    * Make sure that the paths to your key and certificate files are correct.  You can specify the paths using environment variables `HTTPS_KEY` and `HTTPS_CERT`, or you can modify the code directly.

## Running the server

**HTTP**

```bash
node index.js
```

**HTTPS**

```bash
node index-tls.js
```