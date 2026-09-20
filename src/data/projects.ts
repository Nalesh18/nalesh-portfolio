export type ArchitectureNode = {
  label: string;
  note?: string;
};

export type Project = {
  id: string;
  name: string;
  /** Short domain label used on the card. */
  domain: string;
  description: string;
  /** Bullet points taken directly from the resume. */
  details: string[];
  /** Concepts and technologies explicitly supported by the resume. */
  concepts: string[];
  metrics: { value: string; label: string }[];
  detail: {
    overview: string;
    problem: string;
    implementation: string[];
    keyResults: string[];
  };
  /** Conceptual data-flow visualisation. `null` where it cannot be derived safely. */
  architecture: ArchitectureNode[] | null;
  /** No public URLs on the resume — fill these in to enable the links. */
  github: string | null;
  live: string | null;
};

export const projects: Project[] = [
  {
    id: "real-time-collaborative-canvas",
    name: "Real Time Collaborative Canvas",
    domain: "Real-time systems",
    description:
      "Real-time collaborative drawing platform where multiple people sketch on a shared canvas at the same time.",
    details: [
      "Supports 20+ simultaneous users per room.",
      "Built on WebSocket technology with 90% connection stability.",
      "Server-side state management with persistent room history.",
      "Unlimited undo/redo across 1000+ operations per session.",
    ],
    concepts: [
      "WebSocket",
      "Real-time collaboration",
      "Server-side state management",
      "Persistent room history",
      "Undo/redo",
    ],
    metrics: [
      { value: "20+", label: "Simultaneous users per room" },
      { value: "90%", label: "Connection stability" },
      { value: "1000+", label: "Operations per session" },
    ],
    detail: {
      overview:
        "A drawing platform where a room's participants see each other's strokes as they happen, with the canvas state kept on the server rather than in any single client.",
      problem:
        "Collaborative drawing needs every participant to converge on the same canvas while connections come and go, and it needs a history that survives beyond one browser tab.",
      implementation: [
        "Rooms communicate over WebSocket connections, carrying drawing operations between participants in real time.",
        "Canvas state is managed server-side so the room — not an individual client — is the source of truth.",
        "Room history is persisted, which also backs unlimited undo/redo over the operations in a session.",
      ],
      keyResults: [
        "20+ simultaneous users supported per room.",
        "90% connection stability.",
        "Unlimited undo/redo across 1000+ operations per session.",
      ],
    },
    architecture: [
      { label: "User", note: "Draws on the shared canvas" },
      { label: "WebSocket", note: "Real-time operation channel" },
      { label: "Collaboration Server", note: "Broadcasts to the room" },
      { label: "Room State", note: "Server-side source of truth" },
      { label: "Persistent History", note: "Backs unlimited undo/redo" },
    ],
    github: null,
    live: null,
  },
  {
    id: "file-transferring-system",
    name: "File Transferring System",
    domain: "Networking",
    description:
      "A network-based file transfer platform enabling seamless sharing of video files between a client and server.",
    details: [
      "Efficient data exchange between client and server.",
      "Error handling across the transfer.",
      "Received files are saved in the local system.",
    ],
    concepts: [
      "Client-server networking",
      "File transfer",
      "Error handling",
      "Local file storage",
    ],
    metrics: [],
    detail: {
      overview:
        "A client-server platform for moving video files across a network, handling the transfer end to end and writing what arrives to disk.",
      problem:
        "Sharing large video files between two machines needs a transfer path that exchanges data efficiently and does not fall over when something goes wrong mid-transfer.",
      implementation: [
        "A client and a server exchange video file data over a network connection.",
        "Error handling covers failures encountered during the exchange.",
        "Files received by the server are written to the local system.",
      ],
      keyResults: [
        "Seamless sharing of video files between client and server.",
        "Efficient data exchange with error handling in place.",
        "Received files persisted to local storage.",
      ],
    },
    architecture: [
      { label: "Client", note: "Sends the video file" },
      { label: "Network", note: "Transfer channel" },
      { label: "Server", note: "Receives and handles errors" },
      { label: "File Storage", note: "Saved to the local system" },
    ],
    github: null,
    live: null,
  },
  {
    id: "object-detection",
    name: "Object Detection",
    domain: "Computer vision",
    description:
      "Object detection system using Histogram of Oriented Gradients for feature extraction, comparing classical classifiers on the same features.",
    details: [
      "HOG feature extraction with minimal preprocessing.",
      "SVM and Random Forest classifiers trained on the extracted features.",
      "Classifier comparison across object categories.",
      'Detects "Full" vs "Missing" egg cartons.',
    ],
    concepts: [
      "Histogram of Oriented Gradients",
      "Feature extraction",
      "SVM",
      "Random Forest",
      "Classifier comparison",
    ],
    metrics: [],
    detail: {
      overview:
        "A detection system built on classical computer vision: HOG descriptors feed two different classifiers, which are then compared on the same task.",
      problem:
        'Distinguishing object categories — such as "Full" versus "Missing" egg cartons — without heavy preprocessing, and working out which classifier suits the extracted features.',
      implementation: [
        "Histogram of Oriented Gradients is used for feature extraction, with minimal preprocessing applied to the input.",
        "An SVM classifier and a Random Forest classifier are trained on the same HOG features.",
        "The two classifiers are compared on object category detection.",
      ],
      keyResults: [
        'Detection of object categories including "Full" and "Missing" egg cartons.',
        "A direct comparison between SVM and Random Forest on HOG features.",
      ],
    },
    architecture: [
      { label: "Input Image", note: "Minimal preprocessing" },
      { label: "HOG Feature Extraction", note: "Gradient orientation descriptors" },
      { label: "SVM / Random Forest", note: "Classifiers compared" },
      { label: "Object Category", note: '"Full" vs "Missing"' },
    ],
    github: null,
    live: null,
  },
  {
    id: "network-management-system",
    name: "Network Management System",
    domain: "Networking",
    description:
      "A network topology management system built around a hybrid data structure, working with routers and switches.",
    details: [
      "Created a hybrid data structure to manage network topology.",
      "Improved efficiency of network operations.",
      "Worked with routers and switches.",
      "Used data visualization techniques.",
    ],
    concepts: [
      "Hybrid data structure",
      "Network topology",
      "Routers and switches",
      "Data visualization",
    ],
    metrics: [],
    detail: {
      overview:
        "A system for representing and managing network topology, using a purpose-built hybrid data structure and visualisation to make the network legible.",
      problem:
        "Network topologies made up of routers and switches need a representation that keeps common network operations efficient as the topology is queried and changed.",
      implementation: [
        "A hybrid data structure was created to represent and manage the network topology.",
        "The system works with routers and switches as the topology's elements.",
        "Data visualization techniques were used to present the network.",
      ],
      keyResults: [
        "Improved efficiency of network operations.",
        "Topology managed through a single hybrid data structure.",
      ],
    },
    architecture: null,
    github: null,
    live: null,
  },
];
