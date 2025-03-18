import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGoogle } from 'react-icons/fa';
import weightly from '../../assets/WeightlyBanner.png';

const WeightlyCaseStudy = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <FaArrowLeft /> Back to Portfolio
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Weightly Case Study
        </h1>
        
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <img 
          src={weightly} 
          alt="Weightly App Banner"
          className="w-full rounded-lg shadow-md mb-10"
        />
        
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 mb-3">
            Weightly is a GLP-1 weight loss tracking application built with React Native and Expo, designed 
            to help users monitor their weight loss journey while using medications like Ozempic and 
            Wegovy. Developed to capitalize on the rapidly emerging market for GLP-1 medications, Weightly provides 
            comprehensive tools for weight tracking, medication scheduling, estimated medication levels, and progress analytics.
            This project represents my most technically complex development work to date, and was completed as a collaboration
            where I handled the front-end development while a colleague managed the backend infrastructure.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.bilaal5279.weightly"
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
            >
              <FaGoogle /> View on Play Store
            </a>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Motivation & Market Opportunity
          </h2>
          <p className="text-gray-700 mb-4">
            The inspiration for Weightly came from recognizing the rapidly growing demand for GLP-1 
            medications in weight management. With drugs like Ozempic, Wegovy, and Mounjaro becoming 
            increasingly popular and generating billions in sales, I identified a significant market 
            opportunity for specialized tools targeting this specific user group.
          </p>
          <p className="text-gray-700 mb-4">
            Market research showed that while general weight tracking apps were abundant, none were 
            specifically designed to address the unique aspects of GLP-1 medication usage, such as 
            dose escalation schedules, tracking medication levels in the body, or correlating weight 
            loss with consistent medication use patterns.
          </p>
          <p className="text-gray-700 mb-4">
            With the GLP-1 market projected to grow exponentially, I saw an opportunity to enter early
            with a specialized solution. This would not only help users on their weight loss journey but
            also establish a presence in what was clearly becoming a major health tech market segment.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Challenges
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              1. Complex Data Flow Architecture
            </h3>
            <p className="text-gray-700 mb-3">
              The most significant challenge was creating a robust data flow system. I needed to send data 
              to our Node.js/Express backend server, query it back, and then manipulate it differently depending 
              on the specific screen and feature. For example, calculating estimated medication levels in the body 
              required complex time-series data processing with medication half-life factored in, while weight trend 
              analysis needed statistical processing. Managing these different data transformations while maintaining 
              performance was extremely challenging, especially since the data flow architecture needed to be consistent 
              between our Express backend and the React Native frontend.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              2. Cross-Platform Health Data Integration
            </h3>
            <p className="text-gray-700 mb-3">
              This was my first experience working with native health integration code. Implementing 
              HealthKit for iOS and Health Connect for Android presented a steep learning curve, as I had 
              to understand the different APIs, security models, and data structures of each platform. 
              Creating a unified interface that could seamlessly work with both systems while handling 
              all required permissions properly was particularly challenging.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              3. Platform-Specific Debugging
            </h3>
            <p className="text-gray-700 mb-3">
              Debugging across iOS and Android platforms revealed numerous platform-specific issues that weren't 
              apparent in the development environment. Android and iOS handled authentication flows differently, 
              rendering varied between devices, and performance characteristics differed significantly. I had to 
              develop separate debugging processes for each platform, often fixing issues that only appeared on 
              specific device types or OS versions.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              4. Authentication Challenges
            </h3>
            <p className="text-gray-700 mb-3">
              Implementing both Google and Apple authentication systems revealed unexpected complexity. 
              Each system had different token handling, refresh mechanisms, and security requirements. 
              Apple's authentication was particularly challenging due to its stricter privacy requirements 
              and more limited documentation compared to Google's. Creating a unified user experience 
              across both authentication systems required significant custom code.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              5. Subscription & Pricing Optimization
            </h3>
            <p className="text-gray-700 mb-3">
              As my first app with paying customers, implementing and optimizing a subscription system presented 
              new challenges. I needed to determine the optimal price points through market testing, implement 
              RevenueCat for subscription management, and design feature tiers that would provide value at each 
              level. This required constant monitoring and adjustment based on user acquisition, retention, and 
              conversion metrics.
            </p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Weight Tracking</h3>
              <p className="text-gray-700">
                Customizable weight logging with support for different units, timestamps, and notes. 
                Interactive graphs show trends over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Medication Management</h3>
              <p className="text-gray-700">
                Track medication doses, schedules, and side effects. Set reminders for injection days.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Progress Analytics</h3>
              <p className="text-gray-700">
                Detailed statistics on weight loss rate, percentage lost, and projections based on current trends.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Features</h3>
              <p className="text-gray-700">
                Advanced analytics, HealthKit, photo progress tracking, and custom goal setting.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Development Approach & Collaboration
          </h2>
          
          <p className="text-gray-700 mb-4">
            Weightly represents my most complex development project to date and was completed as a collaborative 
            effort. I handled all front-end development using React Native with Expo, while a colleague managed 
            the backend infrastructure. This collaboration required clear API definition, consistent communication, 
            and coordinated development cycles.
          </p>
          
          <p className="text-gray-700 mb-4">
            The front-end development was particularly challenging due to the complex data visualizations, 
            state management across numerous screens, and the need to provide a seamless user experience 
            while handling potentially slow network responses. I implemented optimistic UI updates and 
            local caching to ensure the app remained responsive even with intermittent connectivity.
          </p>
          
          <p className="text-gray-700 mb-4">
            Throughout the development process, we maintained a strict code review process, comprehensive 
            test coverage, and regular performance profiling to ensure a high-quality final product.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technologies Used
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">React Native</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Expo</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Firebase</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">RevenueCat</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">HealthKit (iOS)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Health Connect (Android)</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Apple/Google Authentication</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Victory-Native</span>
          </div>
          
          <p className="text-gray-700">
            The front-end was built with React Native and Expo to enable cross-platform development, while 
            still allowing integration with native health services through Expo's native module system. 
            Firebase provided FCM Tokens. We used an AWS server with nodejs and express for the backend. RevenueCat handled subscription 
            management across both Android and iOS platforms. Data visualization was achieved through Victory Native Charts with custom-built animations to improve user engagement with their progress data.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Outcome & Learnings
          </h2>
          <p className="text-gray-700 mb-4">
            Weightly represents a significant milestone in my development career as it marked my first 
            application with paying customers. The app has been well-received in the Google Play Store, 
            maintaining a 4.3-star rating .
          </p>
          <p className="text-gray-700 mb-4">
            Key learnings from this project:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The importance of market timing – entering the GLP-1 app space early provides a competitive advantage</li>
            <li>The complexity of managing native functionality across different platforms requires careful planning</li>
            <li>Implementing effective pricing strategies requires continuous analysis and adjustment</li>
            <li>Collaboration requires clear API contracts and regular communication to be successful</li>
            <li>Understanding user behavior through analytics is crucial for feature prioritization</li>
            <li>Platform-specific authentication and health data integration requires substantially more development time than anticipated</li>
          </ul>
          <p className="text-gray-700">
            Building Weightly pushed me far beyond my previous development experience, requiring me to learn 
            native code integration, complex state management, and subscription-based business models. The 
            ability to create a product that generates revenue and helps users achieve their health goals has 
            been extremely rewarding and has shaped my approach to future projects.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeightlyCaseStudy;