import "jquery";

declare global {
  interface JQuery {
    owlCarousel(options?: Record<string, unknown>): JQuery;
  }
}

export {};
