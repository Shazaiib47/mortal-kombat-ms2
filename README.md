<h1 align="center">Mortal Kombat</h1>

<h2 align="center"><img src="/documentation/mk-header.jpg"></h2>

# Table of Contents <a name="Home"></a>

1. [Project Introduction](#introduction)
2. [UX](#ux)
3. [Design Choices](#designchoices)
4. [Wireframes](#wireframes)
5. [Features](#features)
6. [Technologies Used](#techused)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)

## Project Introduction <a name="introduction"></a>
The Project I have created is a Memory Card Flip game with an added theme of Mortal Kombat.
The premise of this game is simple, find the matching pair of cards to win the game.

As i centered the memory game around a fighting game, I wanted to add my touches to it. By this I mean
a typical card game has a feature that tracks how much flips were made etc. In my project, i added a fight counter
which is tracked via a unmatch or a match. If the user matches cards, they are allocated 3 points.
In a fighting game a round consists of 3 rounds, so scoring 3 rounds wins you the game. I wanted to add this concept to 
my project, so by scoring a pair, you win a fight and have won 3 points.
However, by matching 2 different cards/fighters, you lose the round and lose points which will take you into the negatives.

This feature was important to add for me as I centered the project around a fighting game. So the cards represent the fighters and
the flips represent the fights won counter.

<h2 align="left"><img src="/documentation/mk-fight-win.png"></h2> <h2 align="right"><img src="/documentation/mk-fight-loss.png"></h2>

To view my live project, please click the link below. I hope you have fun playing the game as much as I do.

[View My Live Project Here](https://shazaiib47.github.io/mortal-kombat-ms2/)

## User Experience (UX) <a name="ux"></a>

- ### External User Goals

    - As a User who plays the game, I want to be able to have fun playing the game.
    - As a User who plays the game, I want my effort to be recognised whilst playing.

- ### Site Owner Goals

    - As the site owner of the game, I want to share the same experiences as the visitor and
    have fun playing the game as well.
    - As the site owner of the game, I want to be able to view all the elements of the game on 
    a single page to prevent scrolling.


## Design Choices <a name="designchoices"></a>

- ### Font Selection

    - As my project was centered around the theme of Mortal Kombat, finding the right font was
    imperative for me. As there was no font just as replicated like the font In Mortal Kombat, I 
    had to find a similar one.

        The font I had chosen for the game was [Spectral SC](https://fonts.google.com/specimen/Spectral+SC?query=spec).

    <h2 align="left"><img src="/documentation/mk-font-preview.png"></h2>  
    
    <h2 align="right"><img src="/documentation/mk-text-preview.png"></h2>

    As Shown in the images above, the font comparison is relatively the same in some aspects. This had narrowed down
    my search for a good font and Spectral SC looked like a very ideal font for my game.


- ### Colour Choices

    - As my game was themed around Mortal Kombat, the colour choice in the  game had to represent the colour's
    used in the game for added imersion and to ensure it matched with no contrast.

    - Both the colours used on the card and also the background had matched very well. The background of the front facing
    card had touched quite well with the theme of the game. As I kept the user audience in mind, colour choice was important
    as the creator of the game to ensure there was no distracting elements for the user.

    <h2 align="center"><img src="/documentation/mk-colour-palette.png"></h2>

- ### Cards & Styling

    - In terms of styling the cards I had to think carefully as to how I would want them to be
      so the user has no trouble interacting and it would be clear for them to click with no errors.

    - The cards were styled entirely in CSS with the added image elements, both front and back added
    in the HTML along with sizing and marginal properties applied. Colour theme was taken into consideration 
    here too and I also added a colour background to the cards as well as the images themselves.

    <h2 align="center"><img src="/documentation/mk-headerinput.png"></h2>

    - As shown above, both the front face and back face cards have respective styling towards them. There is also 
    the background behind the front facing cards that reflect the overall theme.

- ### Background Wallpaper

    - The background wallpaper was an important element to also consider as it Had to be relevant to the theme of Mortal
    Kombat, but also not too flashy or distracting for the user so certaine elements are not hidden.

    - The background image for the game was taken directly from the official Fandom Wiki for [Mortal Kombat](https://mortalkombat.fandom.com/wiki/Mortal_Kombat_Wiki)