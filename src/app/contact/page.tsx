'use client'

import { useState } from 'react'

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Location & Time</h2>
            <div className="space-y-3">
              <p className="text-gray-300">📍 San Francisco, CA</p>
              <p className="text-gray-300">🕒 Pacific Time (PT)</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Email</h2>
            <a 
              href="mailto:your.email@example.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              your.email@example.com
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">Social Media</h2>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 