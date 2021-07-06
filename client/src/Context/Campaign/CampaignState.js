import React, { useReducer } from 'react';
import axios from 'axios';
import CampaignContext from './CampaignContext';
import CampaignReducer from './CampaignReducer';
import {
  GET_CAMPAIGNS,
  CAMPAIGN_ERROR,
  CREATE_CAMPAIGN,
  DELETE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  SET_ACADEMIC_YEAR,
  CLEAR_ACADEMIC_YEAR,
  UPDATE_CURRENT_CHOICES,
} from '../Types';

const CampaignState = (props) => {
  const initialState = {
    campaigns: [],
    academicYear: ''
  };

  const [state, dispatch] = useReducer(CampaignReducer, initialState);

  //get campaigns

  const getCampaigns = async () => {
    try {
      const res = await axios.get('http://localhost:5000/campaigns');

      dispatch({
        type: GET_CAMPAIGNS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: CAMPAIGN_ERROR,
        payload: err.response,
      });
    }
  };

  //create campaign
  const createCampaign = async (campaign) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'http://localhost:5000/campaigns/add',
        campaign,
        config
      );
      dispatch({ type: CREATE_CAMPAIGN, payload: res.data });
      console.log(res.data);
    } catch (error) {}
  };
  //delete campaign
  const deleteCampaign = async (campaign) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.delete(
        `http://localhost:5000/campaigns/${campaign._id}`,
        campaign,
        config,
      );
      dispatch({ type: DELETE_CAMPAIGN, payload: {data: res.data, campaign: campaign} });
    } catch (error) {}
  };


  //update campaign
  const updateCampaign = async (campaign) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.patch(
        `http://localhost:5000/campaigns/${campaign._id}`,
        campaign,
        config,
      );
      dispatch({ type: UPDATE_CAMPAIGN, payload: res.data });
      console.log(res.data);
    } catch (error) {}
  };

  // update current choices
  const updateCurrentChoices = (choices) => {
    dispatch({ type: UPDATE_CURRENT_CHOICES, payload: choices });
  };

  const setAcademicYear = (ay) => {
    dispatch({ type: SET_ACADEMIC_YEAR, payload: ay });

  }

  
  return (
    <CampaignContext.Provider
      value={{
        campaigns: state.campaigns,
        academicYear: state.academicYear,
        getCampaigns,
        createCampaign,
        updateCampaign,
        deleteCampaign,
        setAcademicYear
      }}
    >
      {props.children}
    </CampaignContext.Provider>
  );
};

export default CampaignState;