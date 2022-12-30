export const getLaunchpadData = (launchpadData) => {
  return {
    type: "getLaunchpads",
    payload: launchpadData,
  };
};

export const getSelectedLaunchpadData = (selectedLaunchpadData) => {
  return {
    type: "getSelectedLaunchpad",
    payload: selectedLaunchpadData,
  };
};

export const createLaunchpad = (launchpadData) => {
  return {
    type: "createLaunchpad",
    payload: launchpadData,
  };
};
