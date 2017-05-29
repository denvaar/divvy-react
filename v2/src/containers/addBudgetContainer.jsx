import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

// import storage from '../utils/localStorageUtils';
// import Budgets from '../components/budgets';
// import { fetchBudgets } from '../actions/budgetActions';
import Wizard from '../components/wizard.jsx';


const CreateBudgetGoals = ({ handleNext, handlePrev }) => (
  <div className="vertical-focus">

    <div className="grid page-form-container">
      <div className="grid-row">
        <div className="grid-item box-center">
          <h2>Goals for Grocery budget</h2>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <label className="form-label">How often should this budget be renewed?</label>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <select className="form-input">
            <option></option>
            <option>Never (Just a one-time thing)</option>
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <label className="form-label">Goal Date</label>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <input className="input form-input" type="text" placeholder="Goal date" />
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <label className="form-label">How much do you want to [save/spend]?</label>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <input className="input form-input" type="number" min="0.01" step="1.00" placeholder="[Saving/Spending] amount" />
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <button className="button form-button blue-5-bg white-1" onClick={handlePrev}> Back</button>
          <button className="button form-button green-3-bg white-1" onClick={handleNext} >Customize & Review ></button>
        </div>
      </div>
    </div>
  </div> 
)

const CreateBudgetTitle = ({ handleNext, handlePrev }) => (
  <div className="vertical-focus">
    <div className="grid page-form-container">
      <div className="grid-row">
        <div className="grid-item box-center">
          <h2>Let's Create A New Budget!</h2>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <label className="form-label">Title</label>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <input className="input form-input" type="text" placeholder="Title" />
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <label className="form-label">Budget Type</label>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <select className="form-input">
            <option></option>
            <option>Savings</option>
            <option>Expense</option>
          </select>
        </div>
      </div> 
      <div className="grid-row">
        <div className="grid-item">
          <button className="button form-button green-3-bg white-1" onClick={handleNext}>Define Goals</button>
        </div>
      </div>
    </div>
  </div> 
);


const CreateBudgetReview = ({ handleNext, handlePrev }) => (
  <div className="vertical-focus">

    <div className="grid page-form-container">
      <div className="grid-row">
        <div className="grid-item box-center">
          <h2>Customize & Review Groceries Budget</h2>
        </div>
      </div>
      <div className="grid-item budget-container">
        <div className="grid-column">
          <div className="grid-item focus-text-3 chop">Groceries</div>
          <div className="grid-item-3 box-center focus-text-0">
            <i className="fa fa-book" aria-hidden="true"></i>
          </div>
          <div className="grid-item focus-text-6">
            <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;
            Monthly 
          </div>
          <div className="grid-item focus-text-5">
            $0.00 of $200.00 spent
            <progress value="0" max="100"></progress>
          </div>
        </div>
      </div>
      <div>
        <div>Groceries (Expense budget)</div>
        <div>Goal: Don't spent more than $200.00 each month</div>
        <div>The budget will restart on 01/01/2017</div>
      </div>
      <div className="grid-row">
        <div className="grid-item">
          <button className="button form-button blue-5-bg white-1" onClick={handlePrev}>Back</button>
          <button className="button form-button green-3-bg white-1" onClick={handleNext}>Create Grocery Budget</button>
        </div>
      </div>
    </div>
  </div>
);


class AddBudgetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false
    };
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleCompleted() {
    /* push new budget to server */
    console.log("ur done");
    this.setState({
      finished: true
    });
  }

  render() {
    const components = [
      CreateBudgetTitle,
      CreateBudgetGoals, 
      CreateBudgetReview,
    ];
    
 
    return (
      <div>
        {this.state.finished ? 
          <Redirect to="/budgets" />
          :
          <Wizard
            components={components}
            handleCompleted={this.handleCompleted} />
        }
      </div> 
    );
  }
}

export default AddBudgetContainer;
