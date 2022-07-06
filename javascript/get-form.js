fetch('https://api.getform.io/v1/forms/8f1a51cc-33d8-4d63-b3d7-14dd95fe572c?token=5AABxHlI1BU62O7VAMQEVBs0F8zcVar9BK3lwLcHBjRAAzX80wK0HzEEtj2t',{
    message: 'New Contact Request from PK',
  })
  .then(response => response.json())
  .then(error => console.log(error));