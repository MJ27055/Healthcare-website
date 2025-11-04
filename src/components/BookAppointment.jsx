 import React, { useState, useEffect } from 'react';

// Utility function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
    // Note: Date.toISOString().split('T')[0] gives YYYY-MM-DD in UTC, which might be slightly off
    // but is suitable for basic date input min attribute setting.
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// --- START: Main BookAppointment Component ---
const BookAppointment = () => {
    // 1. STATE MANAGEMENT
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        date: getTodayDate(), // Initialize date to today
        time: '',
        department: '',
        doctor: '',
        reason: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [confirmedData, setConfirmedData] = useState({});

    // Set minimum date to today on component mount
    useEffect(() => {
        const dateInput = document.getElementById('date');
        if (dateInput) {
            dateInput.setAttribute('min', getTodayDate());
        }
    }, []);

    // 2. FORM HANDLING
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        
        // Clear error for the current field as the user types
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    // 3. FORM VALIDATION
    const validate = () => {
        const newErrors = {};
        let isValid = true;

        if (!formData.fullName.trim()) { newErrors.fullName = 'Full name is required'; isValid = false; }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'; isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'; isValid = false;
        }

        const cleanPhone = formData.phone.replace(/[-\s()]/g, '');
        if (!cleanPhone) {
            newErrors.phone = 'Phone number is required'; isValid = false;
        } else if (!/^\+?[\d]{10,15}$/.test(cleanPhone)) { // Basic check for 10-15 digits, allowing optional '+' prefix
            newErrors.phone = 'Please enter a valid phone number (10+ digits)'; isValid = false;
        }

        if (!formData.date) { newErrors.date = 'Date is required'; isValid = false; }
        if (!formData.time) { newErrors.time = 'Time slot is required'; isValid = false; }
        if (!formData.department) { newErrors.department = 'Department is required'; isValid = false; }
        if (!formData.reason.trim()) { newErrors.reason = 'Reason for visit is required'; isValid = false; }

        setErrors(newErrors);
        return isValid;
    };

    // 4. SIMULATED BACKEND/CONFIRMATION LOGIC
    const simulateBooking = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // --- Backend Simulation: Process Booking & Send Confirmation Message ---
                const confirmationMessage = {
                    to: data.email,
                    subject: 'Appointment Confirmation - Diagonsy Hospital',
                    body: `Dear ${data.fullName},\n\nYour appointment has been confirmed!\n\nDetails:\nDate: ${data.date}\nTime: ${data.time}\nDepartment: ${data.department}\n\nWe look forward to seeing you.\n\nBest regards,\nDiagonsy Hospital`,
                };
                
                // Log the confirmation details to the console as the "confirmation message sent"
                console.log('--- Backend: Appointment Booked and Confirmation Email Sent (Simulated) ---', confirmationMessage);
                
                // Simulate success after 2 seconds
                resolve({ success: true, message: 'Appointment booked successfully.' });
            }, 2000); 
        });
    };

    // 5. SUBMIT HANDLER
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            // Note: In a real app, you would send formData to a Firestore/API endpoint here.
            await simulateBooking(formData);

            // On success
            setConfirmedData(formData); // Store data for modal
            setIsModalOpen(true);
            setFormData({ // Reset form fields
                fullName: '',
                email: '',
                phone: '',
                date: getTodayDate(),
                time: '',
                department: '',
                doctor: '',
                reason: ''
            });

        } catch (error) {
            console.error('Booking failed:', error);
            // Replaced alert() with console error and simple modal message
            setConfirmedData(prev => ({ ...prev, errorMessage: 'Booking failed. Please try again.' }));
        } finally {
            setIsSubmitting(false);
        }
    };

    // 6. RENDER
    return (
        <div className="appointment-page-wrapper">
            
            <div className="container main-content-grid">
                
                {/* FORM SECTION */}
                <div className="form-section">
                    <h2 className="title">Book Your Appointment</h2>
                    <p className="description">Fill in the details below to secure your time slot with our specialists.</p>

                    <form className="appointment-form" onSubmit={handleSubmit}>
                        
                        {/* Full Name */}
                        <div className="form-group">
                            <label className="label" htmlFor="fullName">
                                {/* SVG for User Icon */}
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                Full Name *
                            </label>
                            <input 
                                type="text" id="fullName" className={`input ${errors.fullName ? 'error-border' : ''}`} 
                                placeholder="Enter your full name" value={formData.fullName} onChange={handleChange}
                            />
                            <span className="error-text">{errors.fullName}</span>
                        </div>

                        <div className="form-row">
                            {/* Email Address */}
                            <div className="form-group">
                                <label className="label" htmlFor="email">
                                    {/* SVG for Mail Icon */}
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    Email Address *
                                </label>
                                <input 
                                    type="email" id="email" className={`input ${errors.email ? 'error-border' : ''}`} 
                                    placeholder="your.email@example.com" value={formData.email} onChange={handleChange}
                                />
                                <span className="error-text">{errors.email}</span>
                            </div>

                            {/* Phone Number */}
                            <div className="form-group">
                                <label className="label" htmlFor="phone">
                                    {/* SVG for Phone Icon */}
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    Phone Number *
                                </label>
                                <input 
                                    type="tel" id="phone" className={`input ${errors.phone ? 'error-border' : ''}`} 
                                    placeholder="1234567890" value={formData.phone} onChange={handleChange}
                                />
                                <span className="error-text">{errors.phone}</span>
                            </div>
                        </div>

                        <div className="form-row">
                            {/* Appointment Date */}
                            <div className="form-group">
                                <label className="label" htmlFor="date">
                                    {/* SVG for Calendar Icon */}
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    Appointment Date *
                                </label>
                                <input 
                                    type="date" id="date" className={`input ${errors.date ? 'error-border' : ''}`} 
                                    value={formData.date} onChange={handleChange}
                                />
                                <span className="error-text">{errors.date}</span>
                            </div>

                            {/* Time Slot */}
                            <div className="form-group">
                                <label className="label" htmlFor="time">
                                    {/* SVG for Clock Icon */}
                                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    Time Slot *
                                </label>
                                <select id="time" className={`input ${errors.time ? 'error-border' : ''}`} value={formData.time} onChange={handleChange}>
                                    <option value="">Select time</option>
                                    <option value="09:00 AM">09:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="02:00 PM">02:00 PM</option>
                                    <option value="03:00 PM">03:00 PM</option>
                                    <option value="04:00 PM">04:00 PM</option>
                                </select>
                                <span className="error-text">{errors.time}</span>
                            </div>
                        </div>

                        {/* Department */}
                        <div className="form-group">
                            <label className="label" htmlFor="department">
                                {/* SVG for Hospital Icon */}
                                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"></path></svg>
                                Department *
                            </label>
                            <select id="department" className={`input ${errors.department ? 'error-border' : ''}`} value={formData.department} onChange={handleChange}>
                                <option value="">Select department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="General Medicine">General Medicine</option>
                            </select>
                            <span className="error-text">{errors.department}</span>
                        </div>

                        {/* Preferred Doctor */}
                        <div className="form-group">
                            <label className="label" htmlFor="doctor">Preferred Doctor (Optional)</label>
                            <input 
                                type="text" id="doctor" className="input" 
                                placeholder="Dr. Name (if any preference)" value={formData.doctor} onChange={handleChange}
                            />
                        </div>

                        {/* Reason for Visit */}
                        <div className="form-group">
                            <label className="label" htmlFor="reason">Reason for Visit *</label>
                            <textarea 
                                id="reason" className={`textarea ${errors.reason ? 'error-border' : ''}`} 
                                placeholder="Brief description of your symptoms or reason for visit" value={formData.reason} onChange={handleChange}
                            ></textarea>
                            <span className="error-text">{errors.reason}</span>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="submit-btn" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>Processing...
                                </>
                            ) : (
                                'Book Appointment'
                            )}
                        </button>
                    </form>
                </div>

                {/* INFO SECTION */}
                <div className="info-section">
                    <div className="info-card">
                        <div className="info-icon">
                            {/* SVG for Time Icon */}
                            <svg fill="none" stroke="#4763B8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="info-title">Quick & Easy</h3>
                        <p className="info-text">Book your slot in just a few clicks. Your health journey starts now.</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">
                            {/* SVG for Check Icon (Success color: green) */}
                            <svg fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="info-title">Instant Confirmation</h3>
                        <p className="info-text">Receive email confirmation immediately upon successful booking.</p>
                    </div>

                    <div className="contact-box">
                        <h3 className="contact-title">Need Assistance?</h3>
                        <p className="contact-text">Call us at: <strong>+91 1800-123-4567</strong></p>
                        <p className="contact-text">Email: <strong>care@diagonsy.com</strong></p>
                        <p className="contact-hours">Office Hours: Mon - Sat, 8:00 AM - 8:00 PM</p>
                    </div>
                </div>
            </div>

            {/* CONFIRMATION MODAL */}
            {isModalOpen && (
                <div className="modal-overlay show">
                    <div className="modal">
                        <div className="modal-content">
                            <div className="success-icon">
                                {/* SVG for Success Checkmark */}
                                <svg fill="none" stroke="#10b981" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h2 className="modal-title">Appointment Confirmed!</h2>
                            <p className="modal-text">
                                Thank you, **{confirmedData.fullName}**. A confirmation email has been sent to **{confirmedData.email}**.
                            </p>
                            <div className="confirmation-details">
                                <p><strong>Date:</strong> {confirmedData.date}</p>
                                <p><strong>Time:</strong> {confirmedData.time}</p>
                                <p><strong>Department:</strong> {confirmedData.department}</p>
                                {confirmedData.doctor && <p><strong>Doctor:</strong> {confirmedData.doctor}</p>}
                            </div>
                            <button className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Footer Placeholder removed as requested */}

            {/* 9. CSS STYLES (PURE CSS) */}
            <style jsx global>{`
                /* 9.1 Base/Utility */
                .appointment-page-wrapper * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                }
                .appointment-page-wrapper {
                    /* Main background gradient: Light Sky Blue */
                    background: linear-gradient(135deg, #E0F7FA 0%, #B3E5FC 100%); 
                    min-height: 100vh;
                    padding-top: 60px; /* Consistent padding after removing navbar */
                    padding-bottom: 50px;
                    color: #1f2937; /* Dark text for light background */
                    display: flex; /* Make it a flex container to center vertically if content is short */
                    flex-direction: column;
                    justify-content: center; /* Center content vertically */
                    align-items: center; /* Center content horizontally */
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                    flex-grow: 1; /* Allow container to grow and take available space */
                    display: flex;
                    flex-direction: column;
                    justify-content: center; /* Center main content vertically within wrapper */
                }

                /* 9.2 Layout - Footer removed */

                /* 9.3 Main Content Grid */
                .main-content-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 40px;
                    width: 100%; /* Ensure grid takes full width of its parent */
                }

                /* 9.4 Animations */
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                /* 9.5 Header */
                .form-section > .title {
                    text-align: center;
                    font-size: 38px;
                    font-weight: 800;
                    color: #1f2937; /* Changed to dark color */
                    margin-bottom: 10px;
                    animation: fadeInUp 0.5s ease-out;
                    grid-column: 1 / -1; /* Span across the whole grid */
                    padding-top: 20px;
                }
                .form-section > .description {
                    text-align: center;
                    font-size: 18px;
                    color: #6b7280; /* Changed to dark color */
                    margin-bottom: 40px;
                    animation: fadeInUp 0.6s ease-out;
                    grid-column: 1 / -1;
                }
                
                /* 9.6 Form Container & Fields */
                .form-section {
                    /* Moved the form background to the inner form-container */
                    grid-column: 1 / 2;
                    animation: fadeInUp 0.8s ease-out;
                }
                .appointment-form {
                    background: white;
                    border-radius: 20px;
                    padding: 40px;
                    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .title {
                    font-size: 32px;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 10px;
                }
                .description {
                    font-size: 16px;
                    color: #6b7280;
                    margin-bottom: 30px;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #374151;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .label svg {
                    stroke: #4763B8;
                    opacity: 0.8;
                }
                .input, .textarea, select {
                    padding: 12px 16px;
                    font-size: 15px;
                    border: 1px solid #d1d5db;
                    border-radius: 8px;
                    outline: none;
                    background-color: #f9fafb;
                    transition: all 0.3s ease;
                    font-family: inherit;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                }
                .input:focus, .textarea:focus, select:focus {
                    transform: translateY(-1px);
                    box-shadow: 0 5px 15px rgba(71, 99, 184, 0.2);
                    border-color: #4763B8;
                    background-color: #fff;
                }
                .textarea {
                    resize: vertical;
                    min-height: 100px;
                }

                /* 9.7 Error Styles */
                .error-border {
                    border-color: #ef4444 !important;
                    box-shadow: 0 0 0 1px #ef4444;
                }
                .error-text {
                    font-size: 13px;
                    color: #ef4444;
                    margin-top: -4px;
                    height: 18px; /* Maintain layout consistency */
                }

                /* 9.8 Submit Button */
                .submit-btn {
                    padding: 16px;
                    font-size: 18px;
                    font-weight: 700;
                    color: white;
                    /* Gradient using your brand colors */
                    background: linear-gradient(90deg, #4763B8 0%, #3b5998 100%);
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    margin-top: 10px;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 20px rgba(71, 99, 184, 0.4);
                }
                .submit-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(71, 99, 184, 0.6);
                }
                .submit-btn:active {
                    transform: translateY(-1px);
                }
                .submit-btn:disabled {
                    opacity: 0.8;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }
                .spinner {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    border-top: 3px solid white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                    margin-right: 10px;
                }

                /* 9.9 Info Section */
                .info-section {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    animation: slideInRight 0.8s ease-out;
                    padding-top: 100px; /* Align with form visually */
                }
                .info-card {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 25px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    color: #374151;
                    border-left: 5px solid #4763B8;
                }
                .info-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
                }
                .info-icon { margin-bottom: 10px; }
                .info-icon svg { width: 32px; height: 32px; stroke-width: 2.5; }
                .info-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: #1f2937;
                    margin-bottom: 8px;
                }
                .info-text {
                    font-size: 14px;
                    color: #6b7280;
                }
                .contact-box {
                    /* Changed to solid brand blue for better contrast on light background */
                    background: #4763B8; 
                    padding: 30px;
                    border-radius: 15px;
                    color: white;
                    box-shadow: 0 10px 30px rgba(71, 99, 184, 0.5);
                    border: none;
                }
                .contact-title { font-size: 24px; font-weight: 700; margin-bottom: 20px; }
                .contact-text { font-size: 16px; margin-bottom: 10px; opacity: 0.9; }
                .contact-hours { 
                    font-size: 14px; opacity: 0.7; margin-top: 20px; padding-top: 15px; 
                    border-top: 1px solid rgba(255, 255, 255, 0.2); 
                }

                /* 9.10 Modal */
                .modal-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s;
                    padding: 20px;
                }
                .modal-overlay.show { opacity: 1; visibility: visible; }
                .modal {
                    background: white;
                    border-radius: 20px;
                    max-width: 500px;
                    width: 100%;
                    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
                    transform: scale(0.95);
                    transition: transform 0.3s ease-out;
                }
                .modal-overlay.show .modal { transform: scale(1); }
                .modal-content { padding: 40px; text-align: center; }
                .success-icon { 
                    margin-bottom: 20px; 
                }
                .success-icon svg { 
                    width: 70px; height: 70px; 
                    stroke-width: 2;
                    transform: scale(0);
                    animation: checkmark-scale 0.5s forwards cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                @keyframes checkmark-scale {
                    100% { transform: scale(1); }
                }

                .modal-title { font-size: 32px; font-weight: 800; color: #10b981; margin-bottom: 15px; }
                .modal-text { font-size: 16px; color: #6b7280; line-height: 1.6; margin-bottom: 25px; }
                .confirmation-details {
                    background: #f3f4f6;
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 30px;
                    text-align: left;
                    color: #374151;
                    animation: fadeInUp 0.4s ease-out 0.3s backwards;
                }
                .confirmation-details p { margin-bottom: 8px; font-size: 15px; }
                .close-btn {
                    padding: 14px 40px;
                    font-size: 16px;
                    font-weight: 600;
                    color: white;
                    background: linear-gradient(90deg, #4763B8 0%, #3b5998 100%);
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .close-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(71, 99, 184, 0.4); }

                /* 9.11 Responsiveness */
                @media (max-width: 968px) {
                    .main-content-grid {
                        grid-template-columns: 1fr;
                    }
                    .info-section {
                        padding-top: 0;
                    }
                    .form-section > .title, .form-section > .description {
                        grid-column: 1 / -1;
                        text-align: left;
                    }
                }
                @media (max-width: 600px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                    .form-section > .title { font-size: 30px; }
                    .form-section > .description { font-size: 16px; margin-bottom: 20px; }
                    .appointment-form { padding: 30px 20px; }
                }
            `}</style>
        </div>
    );
};

export default BookAppointment;
