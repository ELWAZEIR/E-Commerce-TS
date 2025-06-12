import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">🛠️ Technologies & Tools Used</h1>
      <p className="mb-6 text-lg text-center">
        This ecommerce project was built using a modern frontend stack and a lightweight backend powered by JSON Server.
        Below is a breakdown of the main libraries, tools, and technologies used:
      </p>

      <Section title="⚛️ Core Technologies">
        <Item title="React 19">
          The core library used to build the UI with a component-based structure and efficient rendering.
        </Item>
        <Item title="Vite">
          A lightning-fast development and build tool offering instant reloads and optimized production builds.
        </Item>
        <Item title="TypeScript">
          Used throughout the project to enable type safety and enhanced developer tooling.
        </Item>
      </Section>

      <Section title="🌐 Backend">
        <Item title="JSON Server">
          Lightweight REST API server used as a mock backend for handling CRUD operations.
        </Item>
        <Item title="JSON Server Auth">
          Extended JSON Server to support authentication and protected routes.
        </Item>
        <Item title="Deployed on Render">
          The backend is hosted on Render for free and accessible via public URL.
        </Item>
      </Section>

      <Section title="🎨 UI & Styling">
        <Item title="React Bootstrap">
          Used for quickly designing responsive UI components like modals, navbars, and buttons.
        </Item>
        <Item title="Bootstrap 5">
          A CSS framework for layout grids and pre-styled utility classes.
        </Item>
        <Item title="Lottie React">
          Added lightweight animations to enhance the interface using Lottie files.
        </Item>
        <Item title="React Content Loader">
          Implemented skeleton loaders to improve user experience during data loading.
        </Item>
      </Section>

      <Section title="🔄 State Management">
        <Item title="Redux Toolkit">
          A powerful tool for managing global state in a scalable and clean way.
        </Item>
        <Item title="React Redux">
          Integrated Redux with React components for state access and dispatch.
        </Item>
        <Item title="Redux Persist">
          Enabled persistent storage of Redux state across sessions.
        </Item>
      </Section>

      <Section title="🌐 Networking & Data">
        <Item title="Axios">
          Used for making secure and efficient HTTP requests to the backend API.
        </Item>
      </Section>

      <Section title="📋 Forms & Validation">
        <Item title="React Hook Form">
          Simplified form handling with minimal re-renders and high performance.
        </Item>
        <Item title="@hookform/resolvers + Zod">
          Provided schema-based form validation for safer user input handling.
        </Item>
      </Section>

      <Section title="🔧 Tooling & Plugins">
        <Item title="ESLint">
          Maintained code consistency and caught issues early during development.
        </Item>
        <Item title="vite-plugin-svgr">
          Allowed importing SVGs directly as React components.
        </Item>
        <Item title="vite-tsconfig-paths">
          Simplified path aliases and cleaner import statements.
        </Item>
      </Section>

      <Section title="📦 Dev Dependencies">
        <Item title="TypeScript ESLint">
          Enhanced linting support for TypeScript code.
        </Item>
        <Item title="@vitejs/plugin-react">
          Seamlessly integrated React with the Vite build tool.
        </Item>
        <Item title="React Refresh Plugin">
          Enabled fast refresh for a smoother development experience.
        </Item>
      </Section>

      <Section title="🚀 Deployment">
        <Item title="Frontend: Vercel">
          The frontend application is deployed on Vercel for fast and reliable hosting.
        </Item>
        <Item title="Backend: Render">
          The JSON Server backend (with auth) is hosted on Render to ensure availability and persistence.
        </Item>
      </Section>

      <div className="mt-10 text-center text-green-700 font-semibold text-lg">
        ✅ This stack was carefully selected to ensure performance, scalability, and a polished developer and user
        experience.
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h2>
    <ul className="list-disc list-inside space-y-1">{children}</ul>
  </div>
);

const Item = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <li>
    <span className="font-medium text-gray-900">{title}:</span> {children}
  </li>
);

export default About;