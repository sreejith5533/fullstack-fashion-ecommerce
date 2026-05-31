# Fashion E-commerce Full Stack Website

A modern full-stack fashion e-commerce web application built using React.js, Django REST Framework, and Bootstrap. The platform provides a seamless shopping experience with dynamic product listings, promotional banners, responsive design, and efficient product management.

## Features

### User Features

* Browse fashion products
* View product details
* Search products
* Add products to cart
* Responsive design for mobile, tablet, and desktop
* Dynamic homepage banners
* Smooth shopping experience

### Admin Features

* Manage products
* Add, update, and delete products
* Upload product images
* Manage promotional banners
* Update inventory information

## Tech Stack

### Frontend

* React.js
* Bootstrap 5
* Axios
* CSS3

### Backend

* Django
* Django REST Framework
* SQLite (Development)
* PostgreSQL (Production)

## Installation

### Clone Repository

```bash
git clone https://github.com/sreejith5533/fullstack-fashion-ecommerce.git

```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend runs at:

```text
http://127.0.0.1:8000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## API Endpoints

### Products

* GET /api/products/
* POST /api/products/
* PUT /api/products/{id}/
* DELETE /api/products/{id}/

### Banners

* GET /api/banners/
* POST /api/banners/
* PUT /api/banners/{id}/
* DELETE /api/banners/{id}/

## Deployment

### Backend

* Django
* Django REST Framework
* Gunicorn
* WhiteNoise
* Render

### Frontend

* React.js
* Vite
* Render Static Site

## Future Enhancements

* User Authentication
* Wishlist Functionality
* Order Management System
* Payment Gateway Integration
* Product Categories
* Product Reviews and Ratings
* Inventory Management
* Admin Dashboard Analytics

## Screenshots

Add project screenshots here after deployment.

## Author

**Sreejith R**

Full Stack Developer | React | Django | REST API

GitHub: https://github.com/sreejith5533
