// src/utils/validation.ts

/**
 * Validates an email address format.
 * @param email - The email address to validate.
 * @returns True if the email format is valid, otherwise false.
 * 
 * Example of valid email addresses:
 * - "example@example.com"
 * - "user.name@domain.co.uk"
 * - "user_name@sub.domain.org"
 */
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  /**
   * Validates a phone number format (US standard).
   * @param phone - The phone number to validate.
   * @returns True if the phone number format is valid, otherwise false.
   * 
   * Example of valid phone numbers:
   * - "123-456-7890"
   * - "(123) 456-7890"
   * - "123.456.7890"
   * - "1234567890"
   * - "+1 (123) 456-7890"
   */
  export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^(?:\+1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
  };
  