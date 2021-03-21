import { Machine, actions, assign } from "xstate";

// q.v. https://github.com/statecharts/xstate-viz

const questMachine = Machine<{ look: string }>({
  id: "quest",
  initial: "start",
  context: {
    look:
      "This is an open field west of a white house, with a boarded front door. There is a small mailbox here. A rubber mat saying 'Welcome to Zork!' lies by the door.",
  },
  states: {
    start: {
      entry: assign({
        look: (context, event) => (context.look = "The mailbox is closed."),
      }),
      on: {
        OPEN_MAILBOX: "mailboxOpened",
      },
    },
    mailboxOpened: {
      entry: assign({
        look: (context, event) =>
          (context.look = "You open the mailbox, revealing a small leaflet."),
      }),
      on: {
        CLOSE_MAILBOX: "start",
        READ_LEAFLET: "success",
      },
    },
    success: {
      // entry:'notifySuccess',
      entry: assign({
        look: (context, event) =>
          (context.look = `(first taking the small leaflet)
                          WELCOME TO ZORK

    ZORK is a game of adventure, danger, and low cunning.  In it you will explore some of the most amazing territory ever seen by mortal man.  Hardened adventurers have run screaming from the terrors contained within!

    In ZORK the intrepid explorer delves into the forgotten secrets of a lost labyrinth deep in the bowels of the earth, searching for vast treasures long hidden from prying eyes, treasures guarded by fearsome monsters and diabolical traps!

    No PDP-10 should be without one!

    ZORK was created at the MIT Laboratory for Computer Science, by Tim Anderson, Marc Blank, Bruce Daniels, and Dave Lebling.  It was inspired by the ADVENTURE game of Crowther and Woods, and the long tradition of fantasy and science fiction adventure.  ZORK was originally written in MDL (alias MUDDLE).  The current version was translated from MDL into Inform by Ethan Dicks <erd@infinet.com>.

    On-line information may be available using the HELP and INFO commands (most systems).

    Direct inquiries, comments, etc. by Net mail to erd@infinet.com.

    (c) Copyright 1978,1979 Massachusetts Institute of Technology. 
                     All rights reserved.`),
      }),
      type: "final",
    },
  },
});
