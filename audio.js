//    @@@       @@@  @@@  @@@  @@@  @@@  @@@  @@@  @@@@@@@@  @@@ @@@ v
//    @@@       @@@  @@@@ @@@  @@@  @@@  @@@  @@@  @@@@@@@@  @@@ @@@ 
//    @@!       @@!  @@!@!@@@  @@!  @@@  @@!  !@@  @@!       @@! !@@ 
//    !@!       !@!  !@!!@!@!  !@!  @!@  !@!  @!!  !@!       !@! @!! 
//    @!!       !!@  @!@ !!@!  @!@  !@!   !@@!@!   @!!!:!     !@!@!  
//    !!!       !!!  !@!  !!!  !@!  !!!    @!!!    !!!!!:      @!!!  
//    !!:       !!:  !!:  !!!  !!:  !!!   !: :!!   !!:         !!:   
//     :!:      :!:  :!:  !:!  :!:  !:!  :!:  !:!  :!:         :!:   
//     :: ::::   ::   ::   ::  ::::: ::   ::  :::   ::          ::   
//    : :: : :  :    ::    :    : :  :    :   ::    :           :     
// ============================================================================


async () => {
  let recorder = null;
  let recording = false;
  let recordingLength = 0;
  let AudioContext = window.AudioContext || window.webkitAudioContext;
  let context = null;
  let analyser = null;
  let canvas = document.querySelector('canvas');
  let canvasCtx = canvas.getContext("2d");
  let visualSelect = document.querySelector('#visSelect');
  let micSelect = document.querySelector('#micSelect');

 
Function setVisualize(visibility){
  if Bar.visibility=true then
   circle.visibility=false
   wave.visibility=false
}

Function setPresets(){
   if preseset=true then
   global.themes=(setPresets)=true=RegExp
}

document.setPresets(100){
   Function.visualizer.RegExp=(xr/gef/d-=fwd)=true
   Function.webkitAudioContext=true
}

Function.visualizer(){
   visualSelect.preseset=($preset)
   preseset.themes=(global)=true=
}
document.colors=('rgb'){
   rgb=255,255,255,255
}

private.key='Ly8gICAgQEBAICAgICAgIEBAQCAgQEBAICBAQEAgIEBAQCAgQEBAICBAQEAgIEBAQCAgQEBAQEBAQEAgIEBAQCBAQEAgdgovLyAgICBAQEAgICAgICAgQEBAICBAQEBAIEBAQCAgQEBAICBAQEAgIEBAQCAgQEBAICBAQEBAQEBAQCAgQEBAIEBAQCAKLy8gICAgQEAhICAgICAgIEBAISAgQEAhQCFAQEAgIEBAISAgQEBAICBAQCEgICFAQCAgQEAhICAgICAgIEBAISAhQEAgCi8vICAgICFAISAgICAgICAhQCEgICFAISFAIUAhICAhQCEgIEAhQCAgIUAhICBAISEgICFAISAgICAgICAhQCEgQCEhIAovLyAgICBAISEgICAgICAgISFAICBAIUAgISFAISAgQCFAICAhQCEgICAhQEAhQCEgICBAISEhOiEgICAgICFAIUAhICAKLy8gICAgISEhICAgICAgICEhISAgIUAhICAhISEgICFAISAgISEhICAgIEAhISEgICAgISEhISE6ICAgICAgQCEhISAgCi8vICAgICEhOiAgICAgICAhITogICEhOiAgISEhICAhITogICEhISAgICE6IDohISAgICEhOiAgICAgICAgICEhOiAgIAovLyAgICAgOiE6ICAgICAgOiE6ICA6ITogICE6ISAgOiE6ICAhOiEgIDohOiAgITohICA6ITogICAgICAgICA6ITogICAKLy8gICAgIDo6IDo6OjogICA6OiAgIDo6ICAgOjogIDo6Ojo6IDo6ICAgOjogIDo6OiAgIDo6ICAgICAgICAgIDo6ICAgCi8vICAgIDogOjogOiA6ICA6ICAgIDo6ICAgIDogICAgOiA6ICA6ICAgIDogICA6OiAgICA6ICAgICAgICAgICA6ICAgICAKLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PQoKCmFzeW5jICgpID0+IHsKICBsZXQgcmVjb3JkZXIgPSBudWxsOwogIGxldCByZWNvcmRpbmcgPSBmYWxzZTsKICBsZXQgcmVjb3JkaW5nTGVuZ3RoID0gMDsKICBsZXQgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0OwogIGxldCBjb250ZXh0ID0gbnVsbDsKICBsZXQgYW5hbHlzZXIgPSBudWxsOwogIGxldCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTsKICBsZXQgY2FudmFzQ3R4ID0gY2FudmFzLmdldENvbnRleHQoIjJkIik7CiAgbGV0IHZpc3VhbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXNTZWxlY3QnKTsKICBsZXQgbWljU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pY1NlbGVjdCcpOwoKIApGdW5jdGlvbiBzZXRWaXN1YWxpemUodmlzaWJpbGl0eSl7CiAgaWYgQmFyLnZpc2liaWxpdHk9dHJ1ZSB0aGVuCiAgIGNpcmNsZS52aXNpYmlsaXR5PWZhbHNlCiAgIHdhdmUudmlzaWJpbGl0eT1mYWxzZQp9CgpGdW5jdGlvbiBzZXRQcmVzZXRzKCl7CiAgIGlmIHByZXNlc2V0PXRydWUgdGhlbgogICBnbG9iYWwudGhlbWVzPShzZXRQcmVzZXRzKT10cnVlPVJlZ0V4cAp9Cgpkb2N1bWVudC5zZXRQcmVzZXRzKDEwMCl7CiAgIEZ1bmN0aW9uLnZpc3VhbGl6ZXIuUmVnRXhwPSh4ci9nZWYvZC09ZndkKT10cnVlCiAgIEZ1bmN0aW9uLndlYmtpdEF1ZGlvQ29udGV4dD10cnVlCn0KCkZ1bmN0aW9uLnZpc3VhbGl6ZXIoKXsKICAgdmlzdWFsU2VsZWN0LnByZXNlc2V0PSgkcHJlc2V0KQogICBwcmVzZXNldC50aGVtZXM9KGdsb2JhbCk9dHJ1ZT0KfQpkb2N1bWVudC5jb2xvcnM9KCdyZ2InKXsKICAgcmdiPTI1NSwyNTUsMjU1LDI1NQp9'
