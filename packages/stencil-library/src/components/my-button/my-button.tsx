import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Prop() label: string;

  render() {
    return (
        <button class="main">{this.label}</button>
    );
  }

}
