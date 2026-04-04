
class Pet {
    constructor(id, roomNumber, OwnerName, petType, petName, petAge, daysStay) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.OwnerName = OwnerName;
        this.petType = petType;
        this.petName = petName;
        this.petAge = petAge;
        this.daysStay = daysStay;
        this.amountDue = this.calculateAmountDue();
    }

    calculateAmountDue() {
        const dogRate = 30;
        const catRate = 20;
        return this.petType === 'Dog'
          ? this.daysStay * dogRate
          : this.daysStay * catRate;
      }
    }

    const pets = [];

    const OwnerNameInput = document.getElementById('OwnerName');
    const petTypeInput = document.getElementById('petType');
    const petNameInput = document.getElementById('petName');
    const petAgeInput = document.getElementById('petAge');
    const daysStayInput = document.getElementById('daysStay');
    const addPetBtn = document.getElementById('addPetBtn');
    const clearBtn = document.getElementById('clearBtn');
    const petList = document.getElementById('petList');
    const totalPets = document.getElementById('totalPets');

    function renderPets() {
      petList.innerHTML = '';

      if (pets.length === 0) {
        petList.innerHTML = '<p class="empty">No pets added yet.</p>';
        totalPets.textContent = 'Total Pets: 0';
        return;
      }

      pets.forEach((pet, index) => {
        const petCard = document.createElement('div');
        petCard.className = 'pet-item';

        petCard.innerHTML = `
          <h3>${pet.petName}</h3>
          <p class="pet-meta"><strong>ID:</strong> ${pet.id}</p>
<p c      <p class="pet-meta"><strong>Room:</strong> ${pet.roomNumber}</p>
          <p class="pet-meta"><strong>Owner:</strong> ${pet.OwnerName}</p>
          <p class="pet-meta"><strong>Type:</strong> ${pet.petType}</p>
          <p class="pet-meta"><strong>Age:</strong> ${pet.petAge}</p>
          <p class="pet-meta"><strong>Days Staying:</strong> ${pet.daysStay}</p>
          <p class="pet-meta"><strong>Amount Due:</strong> $${pet.amountDue.toFixed(2)}</p>
          <button class="btn-secondary" onclick="removePet(${index})">Remove</button>
        `;

        petList.appendChild(petCard);
      });

      totalPets.textContent = `Total Pets: ${pets.length}`;
    }

    function removePet(index) {
      const pet = pets[index];
      releaseRoomNumber(pet.petType, pet.roomNumber);
      pets.splice(index, 1);
      renderPets();
    }

    function addPet() {
      const id = getNextPetId();
      const OwnerName = OwnerNameInput.value.trim();
      const petType = petTypeInput.value;
      const petName = petNameInput.value.trim();
      const petAge = Number(petAgeInput.value);
      const daysStay = Number(daysStayInput.value);

      if (!OwnerName || !petName || petAge < 0 || daysStay < 1) {
        alert('Please enter a valid owner name, pet name, age, and stay length.');
        return;
     }

      const roomNumber = getNextRoomNumber(petType);

     if (roomNumber === null) {
     alert(`No available rooms for ${petType}s right now.`);
     return;
    }

    const pet = new Pet(id, roomNumber, OwnerName, petType, petName, petAge, daysStay);
    pets.push(pet);
    renderPets();
    clearInputs();
  }

    function clearInputs() {
      OwnerNameInput.value = ''; 
      petNameInput.value = '';
      petAgeInput.value = '';
      daysStayInput.value = '';
      petTypeInput.value = 'Dog';
    }

    function clearAllPets() {
      pets.length = 0;
      renderPets();
      clearInputs();
    }

    addPetBtn.addEventListener('click', addPet);
    clearBtn.addEventListener('click', clearAllPets);

    renderPets();
    window.removePet = removePet;
