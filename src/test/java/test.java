import com.google.api.client.http.FileContent;

import com.google.api.services.drive.Drive;
import com.google.api.services.drive.model.File;
import com.google.common.annotations.VisibleForTesting;
import org.apache.commons.lang3.builder.ToStringExclude;
import org.junit.Test;

import java.io.IOException;

public class test {

    private static Drive drive;
    @Test
    public  void mser() throws IOException {
        File fileMetadata = new File();
        fileMetadata.setName("photo.jpg");
        java.io.File filePath = new java.io.File("pic.jpg");
        FileContent mediaContent = new FileContent("image/jpg", filePath);
        File file =
                drive.
                        files().
                        create(fileMetadata, mediaContent)
                .setFields("id")
                .execute();
        System.out.println("File ID: " + file.getId());

    }
}
