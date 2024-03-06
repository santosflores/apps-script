/**
 * @fileoverview Hello World package. A simple module that greets a user.
 */

/**
 * Prints a message.
 * @param name
 */
export function helloWorld(name?: string): string {
  if (!name) {
    return `Hello!`;
  } else {
    return `Hello, ${name}!`;
  }
}
