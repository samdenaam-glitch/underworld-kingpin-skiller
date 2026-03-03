export const Woodcutting = {
  name: "Woodcutting",
  xpCurve: level => level*100,
  resources: [
    {name:"Normal Log", level:1, xp:25, value:5},
    {name:"Oak Log", level:15, xp:45, value:12},
    {name:"Willow Log", level:30, xp:70, value:25}
  ],
  perform: () => { console.log("Perform Woodcutting"); }
};
