let cname = document.querySelector(".character-name");
let cphoto = document.querySelector(".character-photo");


function choseCharacter(name, photo, color) {
  cname.innerHTML = name;
  cphoto.src = photo;
  cname.style.color = color
}

async function selectImage (photo){
  
  let reader = new FileReader()
  reader.readAsDataURL(photo.files[0])
  
  reader.onload = async function(){

   let image =  await puter.ai.txt2img('Transforme a pessoa desta foto em uma ilustração inspirada na arte promocional de GTA, preservando suas características faciais. Use contornos marcados, cores vibrantes e enquadramento vertical, com a pessoa centralizada.' ,{
      model: "gpt-image-2.5-flare",
      provider: "openai",
      input_image: reader.result,
      quality: "medium",
      providerOptions: {background:"transparent"}
    })

    choseCharacter('Você', image.src, '#b9b607')
  }

}