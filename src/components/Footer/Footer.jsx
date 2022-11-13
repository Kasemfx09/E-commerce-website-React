import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="p-6 bg-gray-800 text-gray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Getting started</h2>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">                           
                            <Link rel="noopener noreferrer" to="#">Installation</Link>                            
                            <Link rel="noopener noreferrer" to="#">Release Notes</Link>                           
                            <Link rel="noopener noreferrer" to="#">Upgrade Guide</Link>                            
                            <Link rel="noopener noreferrer" to="#">Using with Preprocessors</Link>                            
                            <Link rel="noopener noreferrer" to="#">Optimizing for Production</Link>                            
                            <Link rel="noopener noreferrer" to="#">Browser Support</Link>                          
                            <Link rel="noopener noreferrer" to="#">IntelliSense</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Core Concepts</h2>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <Link rel="noopener noreferrer" to="#">Utility-First</Link>
                            <Link rel="noopener noreferrer" to="#">Utility-First</Link>                            
                            <Link rel="noopener noreferrer" to="#">Responsive Design</Link>                            
                            <Link rel="noopener noreferrer" to="#">Hover, Focus, &amp; Other States</Link>                          
                            <Link rel="noopener noreferrer" to="#">Dark Mode</Link>
                            <Link rel="noopener noreferrer" to="#">Adding Base Styles</Link>
                            <Link rel="noopener noreferrer" to="#">Extracting Components</Link>
                            <Link rel="noopener noreferrer" to="#">Adding New Utilities</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Customization</h2>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <Link rel="noopener noreferrer" to="#">Configuration</Link>
                            <Link rel="noopener noreferrer" to="#">Theme Configuration</Link>
                            <Link rel="noopener noreferrer" to="#">Breakpoints</Link>
                            <Link rel="noopener noreferrer" to="#">Customizing Colors</Link>
                            <Link rel="noopener noreferrer" to="#">Customizing Spacing</Link>
                            <Link rel="noopener noreferrer" to="#">Configuring Variants</Link>
                            <Link rel="noopener noreferrer" to="#">Plugins</Link>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Community</h2>
                        <div className="flex flex-col space-y-2 text-sm text-gray-400">
                            <Link rel="noopener noreferrer" to="#">GitHub</Link>
                            <Link rel="noopener noreferrer" to="#">Discord</Link>
                            <Link rel="noopener noreferrer" to="#">Twitter</Link>
                            <Link rel="noopener noreferrer" to="#">YouTube</Link>
                        </div>
                    </div>
                </div>
                
            </footer>
            <footer>
                <div className="px-6 p-4 text-sm bg-sky-900 ">
                    <span className="text-gray-400">© Copyright 2022. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;