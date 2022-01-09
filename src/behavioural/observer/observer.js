var InputObservable = /** @class */ (function () {
  function InputObservable(input) {
    this.input = input;
    this.observes = [];
  }
  InputObservable.prototype.subscribe = function () {
    var _this = this;
    var observers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      observers[_i] = arguments[_i];
    }
    observers.forEach(function (observer) {
      if (!_this.observes.includes(observer)) {
        _this.observes.push(observer);
      }
    });
  };
  InputObservable.prototype.unsubscribe = function (observer) {
    var observerIndex = this.observes.indexOf(observer);
    if (observerIndex !== -1) {
      this.observes.splice(observerIndex, 1);
    }
  };
  InputObservable.prototype.notify = function () {
    var _this = this;
    this.observes.forEach(function (observer) {
      return observer.update(_this);
    });
  };
  return InputObservable;
})();
var ParagraphObserver = /** @class */ (function () {
  function ParagraphObserver(element) {
    this.element = element;
  }
  ParagraphObserver.prototype.update = function (observable) {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.input.value;
    }
  };
  return ParagraphObserver;
})();
function makeInput() {
  var input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}
function makeParagrah() {
  var p = document.createElement('p');
  document.body.appendChild(p);
  p.innerText = 'Test';
  return p;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagrah());
input.subscribe(p1);
input.input.addEventListener('keyup', function () {
  input.notify();
});
