import React from 'react';

import VisibilityFilterInput from '../containers/VisibilityFilterInput';
import VisibleClabbrs from '../containers/VisibleClabbrs';

const App = () => (
  <main className="wpr wpr--sml">
    <header className="u-mar-btm--lrg u-txt-aln--ctr u-clr--wht">
      <h1 className="u-clr--wht">Clabbr</h1>
      <p>
        Clabbr is a list of commonly used CSS classnames and their three character (max) abbreviations. Its goal is to standardize classname abbreviating.
      </p>
      <p>
        Additions and feedback are much appreciated! Please check out the <a href="https://github.com/iconisch/clabbr" target="_blank">GitHub repo</a>.
      </p>
    </header>
    <section className="clabbr-ser">
      <header className="clabbr-ser__hdr">
        <VisibilityFilterInput />
      </header>
      <VisibleClabbrs />
    </section>
  </main>
);

export default App;
