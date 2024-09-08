import React from 'react';
import './PromptForm.css';
import submiticon from '../submit-icon.png';

const PromptForm = () => {
  return (
    <div className="container">
      <main>
        <form id="prompt-form">
          <input
            type="text"
            id="ai-prompt"
            name="ai-prompt"
            placeholder="Ask me for location advice"
          />
          <button type="submit">
            <img
              src={submiticon}
              className="submit-button-icon"
              alt="submit-button-icon"
            />
          </button>
        </form>
      </main>
    </div>
  );
};

export default PromptForm;
