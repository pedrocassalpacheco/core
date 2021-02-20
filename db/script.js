[
  {
    'repeat(10, 10)': {
      _id: '{{objectId()}}',
      index: '{{index()}}',
      guid: '{{guid()}}',
      account: '{{company().toUpperCase()}}',
      campaign: '{{lorem(3, "words")}}',
      isActive: '{{bool()}}',
      balance: '{{floating(1000, 4000, 2, "$0,0.00")}}', 
      product: [
        {
      		'repeat(2)': { 
      			product: '{{random("APM", "IQM", "EUM", "LOGS", "SECURITY")}}'
  			}
        }
      ],
  	
      comments: '{{lorem(1, "paragraph")}}',
      people: [
        {
        salesperson: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        salesengineer: {
          first: '{{firstName()}}',
          last: '{{surname()}}'
        },
        others: [
          {
            'repeat(3)': {
              id: '{{index()}}',
              name: '{{firstName()}} {{surname()}}'
            }
          }
        ]
        }
        ],
      issues: [
       	{
            'repeat(3)': {
              id: '{{index()}}',
              url: '"https://bugtracking//"{{integer(0,10)}}'
            }
          }
        ],
     
      tags: [
        {
          'repeat(5)': '{{random("NETCORE", "NODEJS", "AWS", "ON PREM", "Kubernetes", "SDK")}}'
        }
      ],
     
      favoriteFruit(tags) {
        const fruits = ['apple', 'banana', 'strawberry'];
        return fruits[tags.integer(0, fruits.length - 1)];
      }
    }
  }
]
