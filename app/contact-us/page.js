"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactUs = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold sm:text-4xl text-zinc-800 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-6">
            If you have any questions or need assistance, feel free to reach out to us through the following channels. Our team is here to help!
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-800">General Helpline</h3>
            <p className="mt-2 text-gray-600">Email: <a href="mailto:helpdesk@mymuseum.com" className="text-primary">helpdesk@mymuseum.com</a></p>
            <p className="mt-2 text-gray-600">Phone: +91 123 456 7890</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-zinc-800">Indian Museum Helpline</h3>
            <p className="mt-2 text-gray-600">Phone: +91 987 654 3210</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-zinc-800">Contact Form</h3>
            <form className="mt-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="mb-4"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="mb-4"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="mb-4"
              />
              <Input
                as="textarea"
                placeholder="Your Message"
                className="mb-4"
              />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
