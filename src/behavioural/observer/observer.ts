interface Observable {
  subscribe(...observer: Observer[]): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(...args: unknown[]): void;
}

class InputObservable implements Observable {
  private observes: Observer[] = [];

  constructor(public input: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observes.includes(observer)) {
        this.observes.push(observer);
      }
    });
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observes.indexOf(observer);

    if (observerIndex !== -1) {
      this.observes.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observes.forEach((observer) => observer.update(this));
  }
}

class ParagraphObserver {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: Observable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.input.value;
    }
  }
}

function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagrah(): HTMLParagraphElement {
  const p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Test';
  return p;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagrah());
input.subscribe(p1);

input.input.addEventListener('keyup', function () {
  input.notify();
});
