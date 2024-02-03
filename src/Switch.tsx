import React, { Component } from 'react';
import styles from './styles/Switch.module.scss';

interface SwitchProps {
  isChecked: boolean;
}

interface SwitchState {
  isChecked: boolean;
}

class Switch extends Component<SwitchProps, SwitchState> {
  constructor(props: SwitchProps) {
    super(props);

    this.state = {
      isChecked: props.isChecked,
    };

    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ isChecked: this.props.isChecked });
  }

  render() {
    return (
      <div className={styles['switch-container']}>
        <label>
          <input
            ref='switch'
            checked={this.state.isChecked}
            onChange={this._handleChange}
            className={styles['switch']}
            type='checkbox'
          />
          <div className={styles['switch-box']}>
            <div></div>
          </div>
        </label>
      </div>
    );
  }

  _handleChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }
}

export default Switch;
