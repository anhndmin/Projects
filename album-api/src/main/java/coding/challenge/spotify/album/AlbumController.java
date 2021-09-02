package coding.challenge.spotify.album;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import coding.challenge.spotify.persistence.AlbumEntite;

@RestController
public class AlbumController {
	
	@Autowired
	private AlbumService albumService;
	
	@RequestMapping("/albums")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public List<AlbumEntite> getAllAlbums() {
		return albumService.getAllAlbums();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/albums")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public void addAlbum(@RequestBody AlbumEntite album) throws Exception {
		albumService.addAlbum(album);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/albums/{id}")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public void deleteAlbum(@PathVariable String id) {
		albumService.deleteAlbum(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/albums/favoris/{id}/{isFavoris}")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public void modifyFavoriteAlbum(@PathVariable String id,@PathVariable boolean isFavoris) throws Exception {
		albumService.modifyFavoriteAlbum(id, isFavoris);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/albums/tag/{id}")
	@CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
	public void addTagAlbum(@RequestBody String tag,@PathVariable String id) throws Exception {
		albumService.addTagAlbum(id,tag);
	}
}
