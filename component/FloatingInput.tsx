import React from 'react';

export default function FloatingInput() {
  const [isFocused, setIsFocused] = React.useState(false);
  const [email, setEmail] = React.useState('');
  return (
    <div className="container">
      <div className="did-floating-label-content">
        <input className="did-floating-input" type="text" placeholder=" " />
        <label className="did-floating-label">Sale Price</label>
      </div>
      <div className="did-floating-label-content input-group">
        <span className="input-group-prepend">
          <div className="input-group-text">$</div>
        </span>
        <input className="did-floating-input" type="text" placeholder=" " />
        <label className="did-floating-label">Sale Price with $ symbol</label>
      </div>

      <div className="did-floating-label-content did-error-input">
        <input className="did-floating-input" type="text" placeholder=" " />
        <label className="did-floating-label">Sale Price</label>
      </div>
    </div>
  );
}
