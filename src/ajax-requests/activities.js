export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

//* ACTIVITIES

export const activities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const newActivity = async (activity) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        activity
      })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updateActivity = async (activityId, token, activity) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/:${activityId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          activity
        })
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  };

    export const publicRoutineData = async (activityId) => {
    try {
      const response = await fetch(`${BASE_URL}/activities/:${activityId}/routines`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  };