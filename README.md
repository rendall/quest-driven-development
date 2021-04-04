# Quest Driven Development

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This is a placeholder for concepts and code related to Quest Driven Development.

## Builder and Visualizer

A minimal narrative builder and visualizer is here: <https://rendall.github.io/quest-driven-development/tools/index.html>

### Instructions

The narrative builder is on the left, and the visualizer is on the right. Build a narrative by inputting information about it into the builder.

The builder has an "Import:" _Choose File_ button at the top, and an "Export:" _Choose download location_ button at the bottom. Use these buttons to save and load previous narratives.

The visualizer shows a directed graph, visualizing the contents of the builder. Because the builder is empty except for a single 'started' state, the visualizer shows one node labeled 'started'

#### Caveats and TODOs

- The layout of the visualizer is reset with every change to the builder.
  - The automatic layout should be better
  - User layouts should be retained
- The state names must be typed in completely.
  - The Action target fields should be drop-downs or auto-complete
- Refreshing the browser resets the narrative
  - Save the narrative in a cookie

#### New Narrative

Fill in the empty _Title_ field with a catchy name for your narrative.

Fill in the empty _Description_ field, perhaps a detailed overview of the narrative plot, outlining an overall theme and all major decision points of the narrative and all major endings. Even if your narrative takes place in a visual medium like a platformer or a first person adventure, record in words your intent for this narrative.

Below the _Description_ field is a _State_ card.

A _State_ is the answer to the questions "What are the consequences of the previous decision?" and "What decisions are available now?". These questions are only ever asked in response to a single previous decision by the player. Even deep into the narrative, after many decisions by the player, the current _State_ will always have an answer to the question "What is happening _now_ (as a result of the _single decision_ that brought the player from the last _State_ to this one)?" and "What choices does the player have now?"

The _State field_ inside the _State card_ is a _unique_ identifier, and should be a word or _short_ phrase that describes the _State_. While being _descriptive_ is important, it's essential that it be _unique_. This identifier is how you and the builder will distinguish one state from another. As a suggestion, consider naming the state after the action that caused the transition to this state, and use the past tense (e.g. the PC decides to _steal the crown_, so the subsequent state might be named _stole-crown_; after deciding to _jump ship_, the subsequent state is _jumped-ship_)

The builder by default shows a _started_ state. For now, keep this identifier, but you can change it any time.

The _Summary_ field is intended to be a focused statement of what occurs at this _State_.

The _Description_ is to be a more in-depth paragraph or two which includes everything relevant to the current state and also to the decisions that will cause the current state to exit (or _transition_).

Inside the _State_ card, press the button labeled _Add action_.

There are two fields. The left _describes_ the action and the right field is for the name of the state that this action transitions to. The left field might be _steal the crown_ and the target state might then be _stole-crown_; or _pull the lever_ and _pulled-lever_

Add an action description on the left and a state identifier on the right. If the state identifier is to an existing node, then an arrow points from the current state's node to the following state's node.

Note that the _action_ field is for a _description_ of the action, and not necessarily a game command. For instance, if the player needs to collect plate, a cup and a box of matches in order for the narrative to proceed to the next step, the action could be _collect plate, cup and box of matches_ or _get everything ready_ or _gather materials_. It's not necessary or desirable to capture that with a parallel chain of 3 states _collected-cup_, _collected-matches_, _collected-plate_ and so forth.

In general, every state should be about a decision that the player must make. If there is only one action-transition from that state, it's likely that the state could be combined with its subsequent.

Also include actions that could happen without player choice or intervention, as long as it's specific to that state. If there is a trap that has a 50% chance of triggering while that state is current, then include this action as well even though it's not strictly a player decision (e.g. _trigger trap_)

In the QDD approach, a _State_ will list every action _that will move the narrative to another state_, but it must _not contain every possible action the player can take_. It might occasionally be important _narratively_ for an action to loop back to the same _State_ (for example, to demonstrate futility), but the focus is on the narrative and not on modeling a response to every possible action. Definitely do not (yet) model actions that have only generic responses (e.g. _"That does nothing."_) or actions that cannot be done (e.g. "_You do not have the axe!"_)

### Visualization library

- <https://js.cytoscape.org/>

Cytoscape contributes massively to the application filesize. For the sake of growth-hacking, this will be ignored for now, as long as actual in-browser responsiveness and performance is not affected.

## Contributors

This repo follows the [all contributors](https://github.com/all-contributors/all-contributors) specification.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/dssjoblom"><img src="https://avatars.githubusercontent.com/u/12595797?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dssjoblom</b></sub></a><br /><a href="#ideas-dssjoblom" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/toinbis"><img src="https://avatars.githubusercontent.com/u/68685?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tomas Čerkasas</b></sub></a><br /><a href="#ideas-toinbis" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://rendall.dev"><img src="https://avatars.githubusercontent.com/u/293263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rendall</b></sub></a><br /><a href="#ideas-rendall" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://01001000.xyz"><img src="https://avatars.githubusercontent.com/u/3887767?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kiwih</b></sub></a><br /><a href="#ideas-kiwih" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
