package coding.challenge.spotify.album;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import coding.challenge.spotify.persistence.AlbumEntite;
import coding.challenge.spotify.persistence.AlbumRepository;

@Service
public class AlbumService {
	@Autowired
	private AlbumRepository albumRepository;
	
	public List<AlbumEntite> getAllAlbums(){
		List<AlbumEntite> albums = new ArrayList<AlbumEntite>();
		albumRepository.findAll().forEach(albums::add);
		return albums;
	}
	
	public void addAlbum(AlbumEntite album) throws Exception {
		AlbumEntite albumInBDD = albumRepository.findById(album.getId()).orElse(null);
		if(albumInBDD != null) {
			throw new Exception("Album existe déjà dans la base de données");
		} else {
			albumRepository.save(album);
		}
	}
	
	public void deleteAlbum(String id) {
		albumRepository.deleteById(id);
	}

	public void modifyFavoriteAlbum(String id, boolean isFavoris) throws Exception {
		AlbumEntite albumInBDD = albumRepository.findById(id).orElse(null);
		if(albumInBDD != null) {
			albumInBDD.setIsFavoris(isFavoris);
			albumRepository.save(albumInBDD);
		} else {
			throw new Exception("Album n'existe pas dans la base de données");
		}
	}

	public void addTagAlbum(String id,String tag) throws Exception{
		AlbumEntite albumInBDD = albumRepository.findById(id).orElse(null);
		if(albumInBDD != null) {
			albumInBDD.setTag(tag);
			albumRepository.save(albumInBDD);
		} else {
			throw new Exception("Album n'existe pas dans la base de données");
		}
		
	}
}
