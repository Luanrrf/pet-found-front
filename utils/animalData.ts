export interface Animal {
  id: number
  name: string
  color: string
  size: string
  gender: string
  observations: string
  image: string
}

export const animals: Animal[] = [
  {
    id: 1,
    name: 'Thor',
    color: 'Caramelo',
    size: 'Médio',
    gender: 'Macho',
    observations: 'Muito dócil e usa coleira azul.',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800',
  },
  {
    id: 2,
    name: 'Mel',
    color: 'Marrom',
    size: 'Pequeno',
    gender: 'Fêmea',
    observations: 'Assustada, mas se aproxima com comida.',
    image:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800',
  },
  {
    id: 3,
    name: 'Bob',
    color: 'Dourado',
    size: 'Grande',
    gender: 'Macho',
    observations: 'Visto pela última vez perto da praça.',
    image:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800',
  },
  {
    id: 4,
    name: 'Nina',
    color: 'Preto',
    size: 'Pequeno',
    gender: 'Fêmea',
    observations: 'Tem uma mancha branca no peito.',
    image:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=800',
  },
  {
    id: 5,
    name: 'Max',
    color: 'Branco',
    size: 'Grande',
    gender: 'Macho',
    observations: 'Atende pelo nome e usa coleira vermelha.',
    image:
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800',
  },
  {
    id: 6,
    name: 'Luna',
    color: 'Cinza',
    size: 'Médio',
    gender: 'Fêmea',
    observations: 'Foi vista perto de uma escola.',
    image:
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800',
  },
  {
    id: 7,
    name: 'Theo',
    color: 'Marrom claro',
    size: 'Pequeno',
    gender: 'Macho',
    observations: 'Costuma ficar assustado com barulho.',
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800',
  },
  {
    id: 8,
    name: 'Amora',
    color: 'Dourado',
    size: 'Médio',
    gender: 'Fêmea',
    observations: 'Animal muito sociável.',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800',
  },
  {
    id: 9,
    name: 'Toby',
    color: 'Caramelo',
    size: 'Grande',
    gender: 'Macho',
    observations: 'Usa uma coleira azul sem identificação.',
    image:
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=800',
  },
]

export const animalList = Array.from(
  { length: 15 },
  (_, index) => animals[index % animals.length]
)

export function getAnimalById(id: number) {
  return animals.find((animal) => animal.id === id) ?? animals[0]
}
