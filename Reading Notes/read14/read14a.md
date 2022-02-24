# Read 14a

## All of these note are taken from links

## What Google Learned From Its Quest to Build the Perfect Team

- To prepare students for that complex world, business schools around the country have revised their curriculums to emphasize team-focused learning.

- Our data-saturated age enables us to examine our work habits and office quirks with a scrutiny that our cubicle-bound forebears could only dream of. Today, on corporate campuses and within university laboratories, psychologists, sociologists and statisticians are devoting themselves to studying everything from team composition to email patterns in order to figure out how to make employees into faster, better and more productive versions of themselves. 

- many of today’s most valuable firms have come to realize that analyzing and improving individual workers ­— a practice known as ‘‘employee performance optimization’’ — isn’t enough. As commerce becomes increasingly global and complex, the bulk of modern work is more and more team-based.

- In Silicon Valley, software engineers are encouraged to work together, in part because studies show that groups tend to innovate faster, see mistakes more quickly and find better solutions to problems. Studies also show that people working in teams tend to achieve better results and report higher job satisfaction.

- If a company wants to outstrip its competitors, it needs to influence not only how people work but also how they work together.

- Google’s People Operations department has scrutinized everything from how frequently particular people eat together (the most productive employees tend to build larger networks by rotating dining companions) to which traits the best managers share (unsurprisingly, good communication and avoiding micromanaging is critical; more shocking, this was news to many Google managers).

- The researchers eventually concluded that what distinguished the ‘‘good’’ teams from the dysfunctional groups was how teammates treated one another. The right norms, in other words, could raise a group’s collective intelligence, whereas the wrong norms could hobble a team, even if, individually, all the members were exceptionally bright.

- As the researchers studied the groups, however, they noticed two behaviors that all the good teams generally shared. 
  1. First, on the good teams, **members spoke in roughly the same proportion,** a phenomenon the researchers referred to as ‘‘equality in distribution of conversational turn-taking.’’ On some teams, everyone spoke during each task; on others, leadership shifted among teammates from assignment to assignment. 
  2. good teams all had high ‘‘average social sensitivity’’ — a fancy way of saying they were skilled at intuiting how others felt based on their tone of voice, their expressions and other nonverbal cues.
    * One of the easiest ways to gauge social sensitivity is to show someone photos of people’s eyes and ask him or her to describe what the people are thinking or feeling.

- Within psychology, researchers sometimes colloquially refer to traits like ‘‘conversational turn-taking’’ and ‘‘average social sensitivity’’ as aspects of what’s known as **psychological safety.**

### CSS Transforms

- https://learn.shayhowe.com/advanced-html-css/css-transforms/

- The transform property comes in two different settings.
  1. two-dimensional
  2. two-dimensional
    * Each of these come with their own individual properties and values.

- The actual syntax for the transform property is quite simple, including the transform property followed by the value. The value specifies the transform type followed by a specific amount inside parentheses. 

div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}

- Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane. Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes. Three-dimensional transforms work on both the x and y axes, as well as the z axis. 

- The translate value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document. Using the translateX value will change the position of an element on the horizontal axis while using the translateY value will change the position of an element on the vertical axis.

- It is common for multiple transforms to be used at once, rotating and scaling the size of an element at the same time for example.

- Behind every transform there is also a matrix explicitly defining the behavior of the transform. Using the rotate, scale, transition, and skew values provide an easy way to establish this matrix. However, should you be mathematically inclined, and prefer to take a deeper dive into transforms, try your hand at using the **matrix** property.

- the default transform origin is the dead center of an element, both 50% horizontally and 50% vertically. To change this default origin position the *transform-origin* property may be used.

- Notably, the transform-origin property does run into some issues when also using the translate transform value. Since both of them are attempting to position the element, their values can collide. **Use the two of these with caution, always checking to make sure the desired outcome is achieved.**

- The perspective value can be set as none or a length measurement. The none value turns off any perspective, while the length value will set the depth of the perspective.

- As with setting a transform-origin you can also set a perspective-origin. The same values used for the transform-origin property may also be used with the perspective-origin property.

- With three-dimensional transforms we can rotate an element around any axes. To do so, we use three new transform values, including rotateX, rotateY, and rotateZ.

- As with the general rotate value before, positive values will rotate the element around its dedicated axis clockwise, while negative values will rotate the element counterclockwise.

- By using the scaleZ three-dimensional transform elements may be scaled on the z axis. This isn’t extremely exciting when no other three-dimensional transforms are in place, as there is nothing in particular to scale.

- Elements may also be translated on the z axis using the **translateZ** value. A negative value here will push an element further away on the z axis, resulting in a smaller element. Using a positive value will pull an element closer on the z axis, resulting in a larger element. 

- Skew is the one two-dimensional transform that **cannot** be transformed on a three-dimensional scale. Elements may be skewed on the x and y axis, then transformed three-dimensionally as wished, but they **cannot be skewed on the z axis.**


### CSS Transitions & Animations

- https://learn.shayhowe.com/advanced-html-css/transitions-animations/

- With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.

- Animations within CSS3 allow the appearance and behavior of an element to be altered in multiple keyframes. Transitions provide a change from one state to another, while animations can set multiple points of transition upon different keyframes.

-  for a transition to take place, an element must have a change in state, and different styles must be identified for each state. The easiest way for determining styles for different states is by using the **:hover, :focus, :active, and :target pseudo-classes.**

- There are four transition related properties in total.
  1. transition-property,
  2. transition-duration,
  3. transition-timing-function,
  4. transition-delay

- The **transition-property** property determines exactly what properties will be altered in conjunction with the other transitional properties. By default, all of the properties within an element’s different states will be altered upon change. However, only the properties identified within the transition-property value will be affected by any transitions.

- The duration in which a transition takes place is set using the **transition-duration** property. The value of this property can be set using general timing values, including seconds (s) and milliseconds (ms). These timing values may also come in fractional measurements, .2s for example.

- The **transition-timing-function** property is used to set the speed in which a transition will move. Knowing the duration from the transition-duration property a transition can have multiple speeds within a single duration. A few of the more popular keyword values for the transition-timing-function property include linear, ease-in, ease-out, and ease-in-out.

- On top of declaring the transition property, duration, and timing function, you can also set a delay with the **transition-delay** property. The delay sets a time value, seconds or milliseconds, that determines how long a transition should be stalled before executing. As with all other transition properties, to delay numerous transitions, each delay can be declared as comma separated values.



### 8 Simple CSS3 Transitions that is WOW your users

- https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users

1. Fade in

    .fade
    {
        opacity:0.5;
    }
    .fade:hover
    {
        opacity:1;
    }

2. Change color

    .color:hover
    {
    background:#53a7ea;
    }

3. Grow & Shrink

.grow:hover
{
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
}
.shrink:hover
{
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}

4. Rotate elements

.rotate:hover
{
    -webkit-transform: rotateZ(-30deg);
    -ms-transform: rotateZ(-30deg);
    transform: rotateZ(-30deg);
}

5. Square to circle

.circle:hover
{
    border-radius:50%;
}

6. 3D shadow

.threed:hover
{
    box-shadow:
        1px 1px #53a7ea,
        2px 2px #53a7ea,
        3px 3px #53a7ea;
    -webkit-transform: translateX(-3px);
    transform: translateX(-3px);
}

7. Swing

8. Inset border

.border:hover
{
    box-shadow: inset 0 0 0 25px #53a7ea;
}

### 6 Buttons animated

* *Well that was fun*

### CSS3 Animations: Keyframes

* *Well that was fun*

### 404

* *Well that was fun*

### Pure CSS Bounce Animation

* *Well that was fun*