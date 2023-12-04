document.addEventListener('DOMContentLoaded', function () {
  const customerData = [
    {
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive',
    },
    {
      name: 'Ronald Richards',
      company: 'Adobe',
      phone: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'Inactive',
    },
    {
      name: 'Marvin McKinney',
      company: 'Tesla',
      phone: '(252) 555-0126',
      email: 'marvin@tesla.com',
      country: 'Iran',
      status: 'Active',
    },
    {
      name: 'Jerome Bell',
      company: 'Google',
      phone: '(629) 555-0129',
      email: 'jerome@google.com',
      country: 'Réunion',
      status: 'Active',
    },
    {
      name: 'Kathryn Murphy',
      company: 'Microsoft',
      phone: '(406) 555-0120',
      email: 'kathryn@microsoft.com',
      country: 'Curaçao',
      status: 'Active',
    },
    {
      name: 'Jacob Jones',
      company: 'Yahoo',
      phone: '(208) 555-0112',
      email: 'jacob@yahoo.com',
      country: 'Brazil',
      status: 'Active',
    },
    {
      name: 'Kristin Watson',
      company: 'Facebook',
      phone: '(704) 555-0127',
      email: 'kristin@facebook.com',
      country: 'Åland Islands',
      status: 'Inactive',
    },
  ];

  const tableBody = document
    .getElementById('customerTable')
    .getElementsByTagName('tbody')[0];
  const searchInput = document.querySelector('.search-input');

  function populateTable(data) {
    tableBody.innerHTML = '';

    data.forEach(customer => {
      const row = tableBody.insertRow();

      Object.entries(customer).forEach(([key, value]) => {
        const cell = row.insertCell();
        cell.textContent = value;

        if (key === 'status') {
          cell.classList.add(
            value === 'Active' ? 'active-status' : 'inactive-status'
          );
        }
      });
    });
  }

  function filterData(searchTerm) {
    const filteredData = customerData.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    populateTable(filteredData);
  }

  searchInput.addEventListener('input', function () {
    filterData(this.value);
  });

  // Инициализация таблицы с начальными данными
  populateTable(customerData);
});
