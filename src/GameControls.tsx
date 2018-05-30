import * as React from 'react';

interface GameControlsProps {
    reset: React.MouseEventHandler<HTMLElement>;
    toggleSound: React.MouseEventHandler<HTMLElement>;
}

export const GameControls: React.SFC<GameControlsProps> = props => (
    <div className="controls">
        <button key="reset" onClick={props.reset}>Reset</button>
        <button key="sound" onClick={props.toggleSound}>Sound</button>
    </div>
);
