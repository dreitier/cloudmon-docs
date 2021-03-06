# Terminology

| Term | Description |
| --- | --- |
| *cloudmon host* | The host on which the *cloudmon* binary is running. |
| *storage provider* | Some API or endpoint which provides file access for *disk*s. |
| *disk* | A *disk* contains multiple backup file and is provided by a specific storage provider.|
| *bucket* | *bucket* means an S3-compatible bucket. One *bucket* can provide any number of disks. |
| *dotstat* or `.stat` | To easily collect meta data about backup files, you can provide a `.stat` file for each of your backup files. It is a simple YAML file in which you can store meta data like time of file creation, time of last modification and the archive date. |
| *backup definition* | At the root of each *disk* there must be a *backup_definition.yaml* which specifices how backups are stored in it.|
| *timestamp type* | *cloudmon* uses [four different types of timestamps](reference/backup-definition/file-dates) for files. Each of those timestamps is internally available. |