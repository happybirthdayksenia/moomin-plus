import React from 'react';

function Sidebar() {
  const friends = [
    {
      id: 1,
      name: 'Moominmamma',
      avatar: 'https://via.placeholder.com/36x36/FFB6C1/000000?text=M',
      isOnline: true
    },
    {
      id: 2,
      name: 'Moominpappa',
      avatar: 'https://via.placeholder.com/36x36/87CEEB/000000?text=P',
      isOnline: true
    },
    {
      id: 3,
      name: 'Snorkmaiden',
      avatar: 'https://via.placeholder.com/36x36/FFD700/000000?text=S',
      isOnline: false
    },
    {
      id: 4,
      name: 'Little My',
      avatar: 'https://via.placeholder.com/36x36/FF69B4/000000?text=L',
      isOnline: true
    },
    {
      id: 5,
      name: 'Snufkin',
      avatar: 'https://via.placeholder.com/36x36/228B22/FFFFFF?text=S',
      isOnline: false
    },
    {
      id: 6,
      name: 'Hemulen',
      avatar: 'https://via.placeholder.com/36x36/8A2BE2/FFFFFF?text=H',
      isOnline: true
    }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/1877F2/FFFFFF?text=U" alt="User" />
        <span>Your Profile</span>
      </div>
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/42A5F5/FFFFFF?text=F" alt="Friends" />
        <span>Friends</span>
      </div>
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/66BB6A/FFFFFF?text=G" alt="Groups" />
        <span>Groups</span>
      </div>
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/FF7043/FFFFFF?text=M" alt="Marketplace" />
        <span>Marketplace</span>
      </div>
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/AB47BC/FFFFFF?text=W" alt="Watch" />
        <span>Watch</span>
      </div>
      <div className="sidebar__item">
        <img src="https://via.placeholder.com/36x36/26A69A/FFFFFF?text=M" alt="Memories" />
        <span>Memories</span>
      </div>
      
      <hr style={{ margin: '20px 0', border: '1px solid #e4e6eb' }} />
      
      <h3 style={{ marginBottom: '15px', fontSize: '17px', fontWeight: '600' }}>Your Friends</h3>
      
      {friends.map(friend => (
        <div key={friend.id} className="sidebar__item">
          <div style={{ position: 'relative' }}>
            <img src={friend.avatar} alt={friend.name} />
            {friend.isOnline && (
              <div style={{
                position: 'absolute',
                bottom: '2px',
                right: '2px',
                width: '12px',
                height: '12px',
                backgroundColor: '#44b700',
                border: '2px solid white',
                borderRadius: '50%'
              }} />
            )}
          </div>
          <span>{friend.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar; 