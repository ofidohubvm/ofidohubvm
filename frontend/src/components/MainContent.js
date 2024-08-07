import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="container mt-5">
      <header className="header text-center mb-4">
        <h1 className="display-4">Welcome to Ofidohub Community Forum</h1>
        <p className="lead">Bridging Expertise, Fostering Innovation</p>
      </header>

      <section className="mb-5">
        <h2 className="section-title">Why Join Ofidohub?</h2>
        <p>
          In today&apos;s rapidly evolving world, tackling complex challenges
          requires diverse perspectives and collaborative efforts. At Ofidohub,
          we are committed to nurturing a vibrant community where ideas converge
          and creativity flourishes. Our platform serves as a nexus for members
          to share insights, seek assistance, and collaborate on groundbreaking
          projects.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="section-title">Our Core Values</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Open Source Collaboration:</strong> We champion the idea
            that innovation thrives in an open environment.
          </li>
          <li className="list-group-item">
            <strong>Interdisciplinary Engagement:</strong> Our platform connects
            professionals and enthusiasts from various fields.
          </li>
          <li className="list-group-item">
            <strong>Developer-Centric Approach:</strong> We prioritize the needs
            of developers.
          </li>
          <li className="list-group-item">
            <strong>Continuous Learning:</strong> Lifelong learning is at the
            heart of our community.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="section-title">Your Blueprint for Success</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>User-Friendly Interface:</strong> Navigate our platform
            effortlessly.
          </li>
          <li className="list-group-item">
            <strong>Robust Resource Library:</strong> Explore a curated
            collection of open-source projects.
          </li>
          <li className="list-group-item">
            <strong>Networking Opportunities:</strong> Join us for regular
            events, hackathons, and meetups.
          </li>
          <li className="list-group-item">
            <strong>Project Showcases:</strong> Present your innovations and
            gain valuable feedback.
          </li>
          <li className="list-group-item">
            <strong>Mentorship Programs:</strong> Connect with experienced
            professionals who can guide you.
          </li>
        </ul>
      </section>

      <section className="join-us-section text-center">
        <h2 className="section-title">Join Us Today!</h2>
        <p>
          At Ofidohub Community Forum, we are excited about the future of
          collaboration and discovery. Our platform is more than just a forum;
          it&apos;s a thriving ecosystem where innovation, learning, and growth
          can flourish. We invite you to become a part of our community that
          celebrates knowledge, fosters creativity, and drives meaningful change
          across disciplines.
        </p>
        <strong>
          Together, let&apos;s create a brighter future for developers,
          researchers, and learners around the world.
        </strong>
      </section>
    </main>
  );
};

export default MainContent;
