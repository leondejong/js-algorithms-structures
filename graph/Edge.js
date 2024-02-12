import Vertex from "./Vertex.js";

class Edge {
  #source = new Vertex();
  #destination = new Vertex();
  #magnitude = 0;

  constructor(source, destination, magnitude = 0) {
    this.#source = source;
    this.#destination = destination;
    this.#magnitude = magnitude;
    source.add(destination);
    destination.add(source);
  }

  get source() {
    return this.#source;
  }

  set source(source) {
    this.#source = source;
    this.#destination.add(source);
  }

  get destination() {
    return this.#destination;
  }

  set destination(destination) {
    this.#destination = destination;
    this.#source.add(destination);
  }

  get magnitude() {
    return this.#magnitude;
  }

  set magnitude(magnitude) {
    this.#magnitude = magnitude;
  }
}

export default Edge;
export { Edge };
