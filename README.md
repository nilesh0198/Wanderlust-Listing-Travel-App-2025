# Wanderlust - Accommodation Booking Platform

Wanderlust is a modern, full-stack accommodation booking platform inspired by Airbnb. It allows users to list their properties, browse available accommodations, make bookings, and leave reviews. The platform is designed to be fast, secure, and fully responsive for all devices.


**Live Demo:** [https://wanderlust‑sm‑raj.onrender.com](https://wanderlust-sm-raj.onrender.com)

## 🚩 Features
- User authentication (signup, login, logout, session management)
- Add, edit, and delete property listings
- Upload and manage listing images (Cloudinary integration)
- Search and filter listings by location, category, and keywords
- Responsive filter row and search bar
- View detailed listing pages with images, description, price, and location
- Leave reviews with star ratings and comments
- Edit and delete your own reviews
- Responsive design for all pages (mobile, tablet, desktop)
- Flash messages for user feedback
- Secure password hashing and validation
- Error handling and custom error pages
- Modern, clean UI/UX with Bootstrap and custom CSS


## 🖼️ Screenshots

| Page                | Screenshot                                             |
|---------------------|--------------------------------------------------------|
| Home (desktop)      | ![Home](/public/images/home.png)                       |
| Home (2)            | ![Home (mobile)](/public/images/home2.png)             |
| Signup Page         | ![Signup](/public/images/signup.png)                   |
| Listing Detail #1   | ![View Listing 1](/public/images/vewlisting1.png)      |
| Listing Detail #2   | ![View Listing 2](/public/images/viewlisting2.png)     |
| Edit Listing Page   | ![Edit Listing](/public/images/edit1.png)              |

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5, EJS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** Passport.js, bcrypt, express-session
- **Image Hosting:** Cloudinary
- **Other:** MVC architecture, RESTful API, JOI validation, Flash messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- NPM 
- Git

### Installation
1. Clone the repository
```bash
git clone https://github.com/shivam-smraj/wanderlust.git
cd wanderlust
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file in the root directory and add your environment variables:
```env
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
MONGODB_URL=your_mongodb_url
SESSION_SECRET=your_session_secret
```
4. Start the development server
```bash
npm app.js
```
  OR
```bash
nodemon app.js
```
The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
wanderlust/
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/          # Database models
├── public/          # Static files
│   ├── css/         # Stylesheets
│   ├── js/          # Client-side JavaScript
│   └── images/      # Static images
├── routes/          # Express routes
├── utils/           # Utility functions
├── views/           # EJS templates
│   ├── includes/    # Partial templates
│   ├── layouts/     # Layout templates
│   └── listings/    # Listing views
├── .env             # Environment variables
├── .gitignore       # Git ignore file
├── app.js           # Express app setup
├── package.json     # Project dependencies
└── README.md        # Project documentation
```

## 🔑 Key Features Implementation

### Authentication
- Uses Passport.js for user authentication
- Session-based authentication
- Password hashing with bcrypt
- MongoDB session store

### Image Upload
- Cloudinary integration for image storage
- Image optimization and transformation
- Multiple image upload support
- Secure file handling

### Data Validation
- Server-side validation with JOI
- Client-side form validation
- Error handling middleware
- Flash messages for user feedback

### Security Features
- CSRF protection
- XSS prevention
- Secure session handling
- Rate limiting
- Helmet security headers

## 📄 API Routes

### Auth
- `POST   /signup`    — create new user  
- `POST   /login`     — authenticate  
- `GET    /logout`    — destroy session  

### Listings
- `GET    /listings`        — list all  
- `POST   /listings`        — create new  
- `GET    /listings/:id`    — view one  
- `PUT    /listings/:id`    — update  
- `DELETE /listings/:id`    — delete  

### Reviews
- `POST    /listings/:id/reviews`         — add review  
- `DELETE  /listings/:id/reviews/:revId`  — delete review

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👏 Acknowledgments

- Inspired by Airbnb's design and functionality.
- Built as part of the web development learning journey in summer 2025.


## 📞 Contact

Email — shivam.smraj@gmail.com  
Project Link: [https://github.com/shivam-smraj/wanderlust](https://github.com/shivam-smraj/wanderlust)

---

Made with ❤️ by Shivam in Summer 2025.
