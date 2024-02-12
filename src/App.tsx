import Component from "./components/Component";

function App() {
  return (
    <>
      <Component
        name="amyrobson"
        img="\assets\avatars\image-amyrobson.png"
        time="1 month ago"
        text="Impressive! Though it seems the drag
        feature could be improved. But overall it
        looks incredible. You’ve nailed the design 
        and the responsiveness at various breakpoints works really well."
      />
      <Component
        name="maxblagun"
        img="\assets\avatars\image-maxblagun.png"
        time="2 week ago"
        text="Woah, your project looks awesome! How long have you 
        been coding for? I’m still new, but think I want to dive into 
        React as well soon. Perhaps you can
         give me an insight on where I can learn React? Thanks!"
      />
      <Component
        name="ramsesmiron"
        img="\assets\avatars\image-ramsesmiron.png"
        time="1 week ago"
        text="@maxblagun If you’re still new, I’d recommend 
        focusing on the fundamentals of HTML, CSS, and JS before
         considering React. It’s
         very tempting to jump ahead but lay a solid foundation first."
      />
    </>
  );
}

export default App;
