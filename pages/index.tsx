import CategoryCard from '@/components/categoryCard'
import EmojiCard from '@/components/emojiCard'
import Layout from '@/components/layout'
import List from '@/components/list'
import emojisData from '@/data/emojis'
import React from 'react'

export default function Home() {

  const [filteredEmojis, setFilterEmojis] = React.useState(emojisData.slice(0, 100))

  function handleFilterBySearch(search: string) {
    if (search.trim().length > 0) {
      setFilterEmojis(
        emojisData.filter((emoji) => {
          return emoji.name.toUpperCase().includes(search.toUpperCase().trim())
        })
      )
    } else {
      setFilterEmojis(emojisData.slice(0, 100))
    }


  }

  function handleFilterByCategory(category: string) {
    setFilterEmojis(
      emojisData.filter((emoji) =>
        emoji.group.toUpperCase().includes(category.toUpperCase())
      )
    );
  }

  return (
    <Layout>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide'>Welcome to Emoji Terra</h1>
      <div className='flex justify-center'>
        <input className='w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-cyan-500 focus:ring-1' type="text" id='name' placeholder='Search for an emoji' onChange={(e) => handleFilterBySearch(e.target.value)} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-8'>
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="😀"
          group={'Smileys & Emotion'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="👨🏻"
          group={'People & Body'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🐶"
          group={'Animals & Nature'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🍔"
          group={'Food & Drink'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚽️"
          group="Activities"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🏨"
          group={'Travel & Places'}
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="💡"
          group="Objects"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="⚛️"
          group="Symbols"
        />
        <CategoryCard
          handleFilter={handleFilterByCategory}
          emoji="🚩"
          group="Flags"
        />
      </div>
      <List emojis={filteredEmojis.slice(0, 100)}></List>
    </Layout>

  )
}
