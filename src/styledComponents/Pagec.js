import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledButton, StyledHeading, StyledDiv } from './StyledHeading';
import { dark, light } from './themesConstants';

const Pagec = () => {

    const [ theme, setTheme ] = useState(light);

    return (
        <ThemeProvider theme={theme}>
            <StyledDiv>
                <StyledHeading>Hello World!!</StyledHeading>
                <p>I'm meant to be writing at this moment. What I mean is, I'm meant to be writing something else at this moment. The document I'm meant to be writing is, of course, open in another program on my computer and is patiently awaiting my attention. Yet here I am plonking down senseless sentiments in this paragraph because it's easier to do than to work on anything particularly meaningful. I am grateful for the distraction.</p>
                <StyledButton onClick={() => setTheme(light)}>Light</StyledButton>
                <StyledButton onClick={() => setTheme(dark)}>Dark</StyledButton>
            </StyledDiv>
        </ThemeProvider>
    )
}

export default Pagec;