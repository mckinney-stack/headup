// Explainer.js
import React, { useState } from "react";
import {
  StyledExplainer,
  StyledExplainerBtn,
  StyledFlexContainer,
  buttonVariants,
} from "./StyledComponents";

const Leaderboard = ({ isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isActive) {
    return null; // Hide the explainer when isActive is true
  }

  return (
    <div>
      <StyledExplainerBtn
        isOpen={isOpen}
        className="btn wiggle"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        onClick={() => setIsOpen(!isOpen)}
      >
        ?
      </StyledExplainerBtn>
      <StyledExplainer isOpen={isOpen}>
        <StyledFlexContainer>
          <h2>What's HeadUp?</h2>
          <button
            style={{ color: "white" }}
            className="btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            x
          </button>
        </StyledFlexContainer>
        <p>
          Are you ready to take your hockey game to the next level? Meet HeadUp,
          the ultimate training app designed to supercharge your hockey IQ,
          sharpen your stickhandling skills, and improve your spatial
          awareness—all while having fun.
          <br />
          <br />
          Inspired by a training technique used by a young Connor McDavid—AKA
          "McJesus"—HeadUp transforms a simple but powerful concept into an
          exciting and interactive experience. 
          <br />
          <br />
          Picture this: McDavid’s coach
          flashes numbers with his fingers, and McDavid has to shout them
          out—without ever looking down at the puck. This drill forces him to
          keep his head up, master his stickhandling, and stay aware of his
          surroundings. Now, with HeadUp, you can do the same drill anytime,
          anywhere.
          <br />
          <br />
          <br />
          <h4>Here’s how it works...</h4>
          <strong>1. Start Training</strong>
          <br />
          Enter your name, hit play, and dive into the action.
          <br />
          <br />
          <strong>2. Focus & React</strong>
          <br />
          The app displays numbers on a virtual puck. Your job? Call them out
          loud while keeping your stickhandling smooth and controlled.
          <br />
          <br />
          <strong>3. Dynamic Drills</strong>
          <br />
          The app will challenge you to switch up your stickhandling
          style—narrow, wide, figure-eight, and more—keeping you on your toes.
          <br />
          <br />
          <strong>4. Track Your Progress</strong>
          <br />
          When you fumble the puck or miss a number, hit stop. Your time is
          recorded and added to the leaderboard, so you can see how you stack up
          against other players.
          <br />
          <br />
          <br />
          <h4>The future of training...</h4>
          What makes HeadUp even more exciting is what’s coming next. Soon,
          advanced AI will analyze your performance in real time, automatically
          stopping the clock when you fumble or call out the wrong number. It’ll
          provide personalized feedback on your technique, helping you identify
          areas for improvement and fine-tune your skills. HeadUp isn’t just
          about practice; it’s about gamified learning that builds confidence,
          precision, and hockey IQ. Whether you’re a beginner or an aspiring
          pro, this app is your secret weapon to elevate your game.
          <br />
          <br />
          Download HeadUp today and train like the best—because greatness starts
          with keeping your head up.
        </p>
      </StyledExplainer>
    </div>
  );
};

export default Leaderboard;
