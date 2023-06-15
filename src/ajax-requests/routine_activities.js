export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';

//* ROUTINE ACTIVITIES

export const updateRoutineActivity = async (routineActivityId, token, routineActivity) => {
    try {
      const response = await fetch(`${BASE_URL}/routine_activities/:${routineActivityId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          routineActivity
        })
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  };

  export const deletePost = async (routineActivityId, token) => {
    try {
      const response = await fetch(`${BASE_URL}/routine_activities/:${routineActivityId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      return result
    } catch (err) {
      console.error(err);
    }
  };
  