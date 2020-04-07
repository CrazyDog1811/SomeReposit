import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode() {
        this.setState( {
            editMode: true  
        } );
    };
    disactivateEditMode() {
        this.setState( {
            editMode: false  
        } );
    }
    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.disactivateEditMode.bind(this)} placeholder={this.props.status} />
                </div>
            }
        </div>
    }
}

export default ProfileStatus;